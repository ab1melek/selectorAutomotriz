/**
 * AiClient - Cliente de Inteligencia Artificial
 * Usa Google Gemini 2.5 Flash para generar recomendaciones personalizadas de autos
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

// URLs de imágenes de cada modelo específico
// Usando URLs directas que funcionan sin problemas de CORS
const IMAGENES_AUTOS = {
  // Nissan
  'nissan-versa': 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
  'nissan-kicks': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
  'nissan-sentra': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
  'nissan-x-trail': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
  'nissan-march': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  
  // Chevrolet
  'chevrolet-aveo': 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=800&q=80',
  'chevrolet-beat': 'https://images.unsplash.com/photo-1580414053950-d06da2c57b93?auto=format&fit=crop&w=800&q=80',
  'chevrolet-onix': 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&w=800&q=80',
  'chevrolet-cavalier': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
  'chevrolet-equinox': 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80',
  'chevrolet-blazer': 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
  
  // Volkswagen
  'volkswagen-vento': 'https://images.unsplash.com/photo-1622109223857-9ff9cfdd588f?auto=format&fit=crop&w=800&q=80',
  'volkswagen-jetta': 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=800&q=80',
  'volkswagen-tiguan': 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800&q=80',
  'volkswagen-taos': 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=800&q=80',
  
  // Toyota
  'toyota-yaris': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80',
  'toyota-corolla': 'https://images.unsplash.com/photo-1623869675781-80aa31bcc99e?auto=format&fit=crop&w=800&q=80',
  'toyota-corolla-cross': 'https://images.unsplash.com/photo-1619976344016-3c6ee2b5a6af?auto=format&fit=crop&w=800&q=80',
  'toyota-camry': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80',
  'toyota-rav4': 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80',
  'toyota-highlander': 'https://images.unsplash.com/photo-1609522199806-78528271853f?auto=format&fit=crop&w=800&q=80',
  
  // Honda
  'honda-fit': 'https://images.unsplash.com/photo-1619976344016-3c6ee2b5a6af?auto=format&fit=crop&w=800&q=80',
  'honda-city': 'https://images.unsplash.com/photo-1610736969017-99a1b92e9d3b?auto=format&fit=crop&w=800&q=80',
  'honda-civic': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
  'honda-hr-v': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
  'honda-cr-v': 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80',
  'honda-accord': 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&w=800&q=80',
  
  // Mazda
  'mazda-2': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  'mazda-3': 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=800&q=80',
  'mazda-3-turbo': 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=800&q=80',
  'mazda-cx-30': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
  'mazda-cx-5': 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80',
  'mazda-cx-50': 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80',
  'mazda-cx-90': 'https://images.unsplash.com/photo-1609522199806-78528271853f?auto=format&fit=crop&w=800&q=80',
  
  // Kia
  'kia-rio': 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
  'kia-forte': 'https://images.unsplash.com/photo-1610736969017-99a1b92e9d3b?auto=format&fit=crop&w=800&q=80',
  'kia-seltos': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
  'kia-sportage': 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80',
  'kia-sorento': 'https://images.unsplash.com/photo-1609522199806-78528271853f?auto=format&fit=crop&w=800&q=80',
  'kia-k5': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
  
  // Hyundai
  'hyundai-accent': 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
  'hyundai-venue': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
  'hyundai-creta': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
  'hyundai-elantra': 'https://images.unsplash.com/photo-1610736969017-99a1b92e9d3b?auto=format&fit=crop&w=800&q=80',
  'hyundai-tucson': 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80',
  'hyundai-santa-fe': 'https://images.unsplash.com/photo-1609522199806-78528271853f?auto=format&fit=crop&w=800&q=80',
  'hyundai-sonata': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
  
  // BMW
  'bmw-x1': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
  'bmw-x3': 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?auto=format&fit=crop&w=800&q=80',
  'bmw-330i': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
  
  // Mercedes-Benz
  'mercedes-gla': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
  'mercedes-glc': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
  'mercedes-c-class': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
  
  // Seat
  'seat-ibiza': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  'seat-leon': 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=800&q=80',
  
  // Suzuki
  'suzuki-swift': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  'suzuki-vitara': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80',
  
  // Peugeot
  'peugeot-208': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  'peugeot-2008': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80'
};

export class AiClient {
  constructor() {
    this.modeloIA = 'Gemini 2.5 Flash';
    this.apiKey = process.env.GEMINI_API_KEY;
    
    if (!this.apiKey) {
      throw new Error('GEMINI_API_KEY no configurada en .env');
    }

    try {
      const client = new GoogleGenerativeAI(this.apiKey);
      this.modelo = client.getGenerativeModel({ 
        model: 'gemini-2.5-flash' 
      });
      console.log('✅ Gemini 2.5 Flash conectado correctamente');
    } catch (error) {
      console.error('❌ Error al conectar Gemini:', error);
      throw new Error('No se pudo inicializar Gemini 2.5 Flash');
    }
  }

  async generarRecomendaciones(contexto, autosDisponibles) {
    try {
      const prompt = this.construirPrompt(contexto, autosDisponibles);
      const respuestaIA = await this.llamarGemini(prompt);
      const recomendacionesBasicas = this.procesarRespuestaIA(respuestaIA, autosDisponibles);
      
      if (recomendacionesBasicas.length === 0) {
        throw new Error('No se pudieron procesar las recomendaciones de Gemini');
      }

      // Agregar imágenes URL a cada recomendación: preferir la imagen del dataset
      return recomendacionesBasicas.map(rec => {
        // Buscar en el dataset original por id para obtener la imagen definitiva
        const datasetAuto = (rec.auto && rec.auto.id) ? autosDisponibles.find(a => a.id === rec.auto.id) : null;
        const resolvedImage = datasetAuto?.imagen || rec.imagen || rec.auto?.imagen || this.obtenerImagenPorAuto(rec.auto);
        console.log(`🔍 Imagen resuelta para ${rec.auto?.id || rec.auto?.marca + ' ' + rec.auto?.modelo}:`, resolvedImage);
        return {
          ...rec,
          imagen: resolvedImage
        };
      });
    } catch (error) {
      console.error('Error al generar recomendaciones:', error);
      throw error;
    }
  }

  construirPrompt(contexto, autosDisponibles) {
    const listaAutos = autosDisponibles.map(auto => 
      `- ${auto.marca} ${auto.modelo} (${auto.segmento}, ${auto.precio})`
    ).join('\n');

    return `Eres un asesor automotriz experto en México. Tu tarea es recomendar EXACTAMENTE 3 autos diferentes basándote en el perfil del cliente.

PERFIL DEL CLIENTE:
- Profesión: ${contexto.profesion}
- Personalidad: ${contexto.personalidad}
- Hobby/Afición: ${contexto.hobby}

AUTOS DISPONIBLES (2025, se venden en México):
${listaAutos}

INSTRUCCIONES CRÍTICAS:
1. Debes recomendar EXACTAMENTE 3 autos DIFERENTES
2. Cada auto DEBE estar en la lista anterior
3. Las justificaciones deben ser CORTAS (máximo 2-3 líneas)
4. Conecta profesión + personalidad + hobby en cada justificación
5. NO menciones colores
6. Responde SOLO con JSON válido, sin texto adicional
7. IMPORTANTE: En la respuesta JSON incluye también el campo 'id' de cada auto tal como aparece en el dataset (ej: "nissan-versa"). Esto permite mapear de forma determinista a la entrada del dataset.

FORMATO DE RESPUESTA (JSON válido):
{
  "recomendaciones": [
    {
      "id": "id-del-auto-ejemplo",
      "marca": "Marca del auto",
      "modelo": "Modelo del auto",
      "justificacion": "Justificación corta conectando los 3 atributos del perfil"
    },
    {
      "id": "otro-id-de-auto",
      "marca": "Otra marca",
      "modelo": "Otro modelo",
      "justificacion": "Justificación corta"
    },
    {
      "id": "tercer-id-de-auto",
      "marca": "Tercera marca",
      "modelo": "Tercer modelo",
      "justificacion": "Justificación corta"
    }
  ]
}

Responde SOLO con el JSON.`;
  }

  async llamarGemini(prompt) {
    try {
      const response = await this.modelo.generateContent(prompt);
      const texto = response.response.text();
      console.log('✅ Respuesta recibida de Gemini');
      return texto;
    } catch (error) {
      console.error('❌ Error en llamada a Gemini:', error.message);
      throw new Error(`Error al llamar Gemini: ${error.message}`);
    }
  }

  procesarRespuestaIA(respuestaIA, autosDisponibles) {
    try {
      const jsonMatch = respuestaIA.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        console.error('No se encontró JSON en la respuesta:', respuestaIA.substring(0, 200));
        throw new Error('Respuesta de Gemini no contiene JSON válido');
      }
      
      const datos = JSON.parse(jsonMatch[0]);
      
      if (!datos.recomendaciones || datos.recomendaciones.length === 0) {
        throw new Error('No hay recomendaciones en la respuesta');
      }

      return datos.recomendaciones.map(rec => {
        // Priorizar búsqueda por `id` si el LLM lo devuelve
        let autoEncontrado = null;
        if (rec.id) {
          autoEncontrado = autosDisponibles.find(a => a.id === rec.id);
        }

        // Fallback: buscar por marca + modelo (tolerancia a mayúsculas)
        if (!autoEncontrado && rec.marca && rec.modelo) {
          autoEncontrado = autosDisponibles.find(a => 
            a.marca.toLowerCase() === rec.marca.toLowerCase() &&
            a.modelo.toLowerCase() === rec.modelo.toLowerCase()
          );
        }

        if (!autoEncontrado) {
          console.warn(`⚠️ Auto no encontrado (id/marca+modelo): ${rec.id || ''} ${rec.marca || ''} ${rec.modelo || ''}`);
        }

        const autoObj = autoEncontrado || { 
          id: rec.id || null,
          marca: rec.marca, 
          modelo: rec.modelo,
          segmento: rec.segmento || 'SUV',
          precio: rec.precio || '$450,000 - $750,000 MXN',
          imagen: rec.imagen || null
        };

        return {
          auto: autoObj,
          justificacion: rec.justificacion,
          // si el auto del dataset tiene imagen, la usaremos; si no, se añadirá más adelante
          imagen: autoObj.imagen || rec.imagen || null
        };
      }).slice(0, 3);
    } catch (error) {
      console.error('Error al procesar respuesta IA:', error);
      throw error;
    }
  }

  obtenerImagenPorAuto(auto) {
    // Usar el ID del auto para obtener la imagen específica del modelo
    if (!auto || !auto.id) {
      return 'https://placehold.co/800x400/667eea/white?text=Auto+2025';
    }
    
    // Generar URL con placeholder que muestre el nombre del auto
    const nombreAuto = `${auto.marca}+${auto.modelo}`.replace(/\s+/g, '+');
    return `https://placehold.co/800x400/667eea/white?text=${nombreAuto}+2025&font=raleway`;
  }
}
