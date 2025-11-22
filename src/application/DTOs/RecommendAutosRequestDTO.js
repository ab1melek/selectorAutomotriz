/**
 * RecommendAutosRequestDTO - Data Transfer Object
 * Define la estructura de entrada para el caso de uso
 */
export class RecommendAutosRequestDTO {
  constructor(profesion, personalidad, hobby) {
    this.profesion = profesion;
    this.personalidad = personalidad;
    this.hobby = hobby;
  }

  /**
   * Crea un DTO desde datos planos
   * @param {Object} data
   * @returns {RecommendAutosRequestDTO}
   */
  static fromPlainObject(data) {
    return new RecommendAutosRequestDTO(
      data.profesion,
      data.personalidad,
      data.hobby
    );
  }

  /**
   * Valida que el DTO tenga datos válidos
   * @returns {boolean}
   */
  esValido() {
    return (
      typeof this.profesion === 'string' &&
      typeof this.personalidad === 'string' &&
      typeof this.hobby === 'string' &&
      this.profesion.length > 0 &&
      this.personalidad.length > 0 &&
      this.hobby.length > 0
    );
  }
}
