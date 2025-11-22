/**
 * Routes - Configuración de rutas HTTP
 * Define las rutas de la API REST (preparado para Express.js)
 */

import { RecommendAutosController } from '../../infrastructure/controllers/RecommendAutosController.js';

/**
 * Configura las rutas de la aplicación
 * @param {Object} app - Instancia de Express
 * @param {RecommendAutosController} controller
 */
export function configurarRutas(app, controller) {
  /**
   * POST /api/recomendaciones
   * Body: { profesion, personalidad, hobby }
   * Response: { exito, recomendaciones[], perfil }
   */
  app.post('/api/recomendaciones', async (req, res) => {
    await controller.manejarSolicitudHTTP(req, res);
  });

  /**
   * GET /api/health
   * Verifica el estado de la API
   */
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      servicio: 'Sistema de Recomendación de Autos',
      version: '1.0.0',
      arquitectura: 'Clean Architecture'
    });
  });

  /**
   * GET /api
   * Información de la API
   */
  app.get('/api', (req, res) => {
    res.json({
      mensaje: 'API de Recomendación de Autos 2025 - México',
      endpoints: {
        recomendaciones: 'POST /api/recomendaciones',
        health: 'GET /api/health'
      },
      ejemplo: {
        url: 'POST /api/recomendaciones',
        body: {
          profesion: 'ingeniero',
          personalidad: 'deportivo',
          hobby: 'tecnología'
        }
      }
    });
  });
}

/**
 * Crea y configura el servidor Express (opcional)
 */
export async function crearServidorHTTP() {
  const express = (await import('express')).default;
  
  // Inyección de dependencias
  const { AutosStaticRepository } = await import('../../infrastructure/repositories/AutosStaticRepository.js');
  const { AiClient } = await import('../../infrastructure/ai/AiClient.js');
  const { AutoRecommenderService } = await import('../../domain/services/AutoRecommenderService.js');
  const { RecommendAutosUseCase } = await import('../../usecases/RecommendAutosUseCase.js');
  
  const autoRepository = new AutosStaticRepository();
  const autoRecommenderService = new AutoRecommenderService(autoRepository);
  const aiClient = new AiClient();
  const recommendAutosUseCase = new RecommendAutosUseCase(
    autoRepository,
    autoRecommenderService,
    aiClient
  );
  const controller = new RecommendAutosController(recommendAutosUseCase);

  // Configurar Express
  const app = express();
  app.use(express.json());

  // Configurar rutas
  configurarRutas(app, controller);

  return app;
}
