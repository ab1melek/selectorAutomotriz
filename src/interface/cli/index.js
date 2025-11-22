/**
 * CLI - Interfaz de Línea de Comandos
 * Punto de entrada principal para ejecutar la aplicación desde consola
 */

// Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Importar configuración
import { config, validarConfiguracion } from '../../config.js';

// Importaciones de infraestructura
import { AutosStaticRepository } from '../../infrastructure/repositories/AutosStaticRepository.js';
import { AiClient } from '../../infrastructure/ai/AiClient.js';
import { RecommendAutosController } from '../../infrastructure/controllers/RecommendAutosController.js';

// Importaciones de dominio
import { AutoRecommenderService } from '../../domain/services/AutoRecommenderService.js';

// Importaciones de casos de uso
import { RecommendAutosUseCase } from '../../usecases/RecommendAutosUseCase.js';

/**
 * Función principal del CLI
 */
async function main() {
  console.log('🚗 Sistema de Recomendación de Autos 2025 - México\n');
  console.log('═'.repeat(60) + '\n');

  // Validar configuración
  validarConfiguracion();

  // Obtener argumentos de línea de comandos
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('❌ Error: Se requieren 3 argumentos\n');
    console.log('Uso:');
    console.log('  node src/interface/cli/index.js <profesion> <personalidad> <hobby>\n');
    console.log('Ejemplo:');
    console.log('  node src/interface/cli/index.js "ingeniero" "deportivo" "tecnología"\n');
    process.exit(1);
  }

  const [profesion, personalidad, hobby] = args;

  console.log('📋 Perfil del Cliente:');
  console.log(`   • Profesión: ${profesion}`);
  console.log(`   • Personalidad: ${personalidad}`);
  console.log(`   • Hobby: ${hobby}\n`);
  console.log('═'.repeat(60) + '\n');
  console.log('🔍 Analizando opciones disponibles...\n');

  try {
    // Inyección de dependencias (Clean Architecture)
    const autoRepository = new AutosStaticRepository();
    const autoRecommenderService = new AutoRecommenderService(autoRepository);
    const aiClient = new AiClient();
    const recommendAutosUseCase = new RecommendAutosUseCase(
      autoRepository,
      autoRecommenderService,
      aiClient
    );
    const controller = new RecommendAutosController(recommendAutosUseCase);

    // Ejecutar recomendación
    const resultado = await controller.recomendar({
      profesion,
      personalidad,
      hobby
    });

    // Mostrar resultados
    if (!resultado.exito) {
      console.log(`❌ Error: ${resultado.error}\n`);
      process.exit(1);
    }

    console.log('✅ Recomendaciones generadas exitosamente!\n');
    console.log('═'.repeat(60) + '\n');

    resultado.recomendaciones.forEach((rec, index) => {
      console.log(`🏆 Recomendación #${index + 1}`);
      console.log(`   Marca: ${rec.auto ? rec.auto.marca : rec.marca}`);
      console.log(`   Modelo: ${rec.auto ? rec.auto.modelo : rec.modelo}`);
      console.log(`   Año: ${rec.auto ? rec.auto.año : rec.año}`);
      console.log(`   Segmento: ${rec.auto ? rec.auto.segmento : rec.segmento}`);
      console.log(`   Precio: ${rec.auto ? rec.auto.precio : rec.precio_aproximado}`);
      console.log(`\n   💡 Justificación:`);
      console.log(`   ${rec.justificacion}`);
      console.log(`\n   🖼️  Imagen:`);
      const imagenUrl = rec.imagenPrompt || rec.imagen_url || rec.imagen_prompt;
      console.log(`   ${imagenUrl}`);
      console.log('\n' + '─'.repeat(60) + '\n');
    });

    console.log('═'.repeat(60));
    console.log(`\n✨ Proceso completado exitosamente!`);
    
    if (!config.gemini.estaConfigurado) {
      console.log('📝 Nota: Resultados generados en modo SIMULADO\n');
    }

    // Guardar resultado en JSON
    const fs = await import('fs');
    const resultadoJSON = JSON.stringify(resultado, null, 2);
    fs.writeFileSync('resultado_recomendacion.json', resultadoJSON);
    console.log('📄 Resultado guardado en: resultado_recomendacion.json\n');

  } catch (error) {
    console.error('❌ Error inesperado:', error.message);
    console.error(error);
    process.exit(1);
  }
}

// Ejecutar CLI
main();
