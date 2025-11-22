/**
 * RecommendAutosUseCase - Caso de Uso Principal
 * Orquesta la lógica de recomendación de autos sin depender de detalles de infraestructura
 */
export class RecommendAutosUseCase {
  constructor(autoRepository, autoRecommenderService, aiClient) {
    this.autoRepository = autoRepository;
    this.autoRecommenderService = autoRecommenderService;
    this.aiClient = aiClient;
  }

  /**
   * Ejecuta el caso de uso de recomendación
   * @param {RecommendAutosRequestDTO} requestDTO
   * @returns {Promise<RecommendAutosResponseDTO>}
   */
  async ejecutar(requestDTO) {
    try {
      // 1. Validar entrada
      this.validarEntrada(requestDTO);

      // 2. Crear contexto de recomendación (lógica de dominio)
      const contexto = this.autoRecommenderService.crearContextoRecomendacion(
        requestDTO.profesion,
        requestDTO.personalidad,
        requestDTO.hobby
      );

      // 3. Obtener todos los autos disponibles
      const autosDisponibles = await this.autoRepository.obtenerTodos();

      // 4. Filtrar autos válidos según reglas de dominio
      const autosValidos = this.autoRecommenderService.filtrarAutosValidos(
        autosDisponibles,
        contexto
      );

      if (autosValidos.length === 0) {
        throw new Error('No hay autos disponibles que cumplan los criterios');
      }

      // 5. Usar AI para generar recomendaciones personalizadas
      const recomendaciones = await this.aiClient.generarRecomendaciones(
        contexto,
        autosValidos
      );

      // 6. Validar que las recomendaciones cumplan reglas de negocio
      this.autoRecommenderService.validarRecomendaciones(
        recomendaciones.map(r => r.auto)
      );

      // 7. Retornar resultado
      return {
        exito: true,
        recomendaciones: recomendaciones.slice(0, 3), // Garantizar solo 3
        contexto: {
          profesion: contexto.profesion,
          personalidad: contexto.personalidad,
          hobby: contexto.hobby
        }
      };
    } catch (error) {
      return {
        exito: false,
        error: error.message,
        recomendaciones: []
      };
    }
  }

  /**
   * Valida que los datos de entrada sean correctos
   * @param {RecommendAutosRequestDTO} requestDTO
   * @throws {Error}
   */
  validarEntrada(requestDTO) {
    if (!requestDTO.profesion || requestDTO.profesion.trim() === '') {
      throw new Error('La profesión es requerida');
    }
    if (!requestDTO.personalidad || requestDTO.personalidad.trim() === '') {
      throw new Error('La personalidad es requerida');
    }
    if (!requestDTO.hobby || requestDTO.hobby.trim() === '') {
      throw new Error('El hobby es requerido');
    }
  }
}
