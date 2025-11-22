import { RecommendAutosRequestDTO } from '../../application/DTOs/RecommendAutosRequestDTO.js';

/**
 * RecommendAutosController - Controlador
 * Punto de entrada para la recomendación de autos
 * Maneja la interacción entre la interfaz y el caso de uso
 */
export class RecommendAutosController {
  constructor(recommendAutosUseCase) {
    this.recommendAutosUseCase = recommendAutosUseCase;
  }

  /**
   * Maneja la solicitud de recomendación
   * @param {Object} datos - { profesion, personalidad, hobby }
   * @returns {Promise<Object>}
   */
  async recomendar(datos) {
    try {
      // Crear DTO de entrada
      const requestDTO = RecommendAutosRequestDTO.fromPlainObject(datos);

      // Validar DTO
      if (!requestDTO.esValido()) {
        return {
          exito: false,
          error: 'Datos de entrada inválidos. Se requiere profesión, personalidad y hobby.'
        };
      }

      // Ejecutar caso de uso
      const resultado = await this.recommendAutosUseCase.ejecutar(requestDTO);

      // Retornar resultado formateado
      return resultado;
    } catch (error) {
      console.error('Error en controlador:', error);
      return {
        exito: false,
        error: error.message || 'Error al procesar la solicitud'
      };
    }
  }

  /**
   * Maneja la solicitud HTTP (para futuras APIs REST)
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   */
  async manejarSolicitudHTTP(req, res) {
    const { profesion, personalidad, hobby } = req.body;

    const resultado = await this.recomendar({
      profesion,
      personalidad,
      hobby
    });

    const statusCode = resultado.exito ? 200 : 400;
    res.status(statusCode).json(resultado);
  }
}
