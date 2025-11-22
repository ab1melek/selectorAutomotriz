/**
 * RecommendAutosResponseDTO - Data Transfer Object
 * Define la estructura de salida del caso de uso
 */
export class RecommendAutosResponseDTO {
  constructor(exito, recomendaciones, contexto, error = null) {
    this.exito = exito;
    this.recomendaciones = recomendaciones;
    this.contexto = contexto;
    this.error = error;
  }

  /**
   * Convierte el DTO a JSON para respuesta HTTP o CLI
   * @returns {Object}
   */
  toJSON() {
    if (!this.exito) {
      return {
        exito: false,
        error: this.error,
        recomendaciones: []
      };
    }

    return {
      exito: true,
      perfil: {
        profesion: this.contexto.profesion,
        personalidad: this.contexto.personalidad,
        hobby: this.contexto.hobby
      },
      recomendaciones: this.recomendaciones.map(rec => ({
        id: rec.auto && rec.auto.id ? rec.auto.id : (rec.id || null),
        auto: {
          marca: rec.auto.marca,
          modelo: rec.auto.modelo,
          año: rec.auto.año,
          segmento: rec.auto.segmento,
          precio: rec.auto.precio
        },
        justificacion: rec.justificacion,
        imagen: rec.imagen || rec.auto?.imagen || rec.imagenPrompt || ''
      }))
    };
  }

  /**
   * Crea un DTO de éxito
   * @param {Array} recomendaciones
   * @param {Object} contexto
   * @returns {RecommendAutosResponseDTO}
   */
  static exito(recomendaciones, contexto) {
    return new RecommendAutosResponseDTO(true, recomendaciones, contexto);
  }

  /**
   * Crea un DTO de error
   * @param {string} mensajeError
   * @returns {RecommendAutosResponseDTO}
   */
  static error(mensajeError) {
    return new RecommendAutosResponseDTO(false, [], {}, mensajeError);
  }
}
