/**
 * AutoRecommenderService - Servicio de Dominio
 * Contiene la lógica de negocio pura para recomendar autos
 */
export class AutoRecommenderService {
  constructor(autoRepository) {
    this.autoRepository = autoRepository;
  }

  /**
   * Filtra autos según criterios del dominio
   * @param {Auto[]} autos
   * @param {Object} perfil
   * @returns {Auto[]}
   */
  filtrarAutosValidos(autos, perfil) {
    return autos.filter(auto => {
      // Validación de reglas de negocio del dominio
      return auto.esAptoParaPerfil(perfil);
    });
  }

  /**
   * Valida que los autos cumplan con las reglas de negocio
   * @param {Auto[]} autos
   * @throws {Error}
   */
  validarRecomendaciones(autos) {
    if (!autos || autos.length === 0) {
      throw new Error('No se encontraron autos para recomendar');
    }

    autos.forEach(auto => {
      if (auto.año !== 2025) {
        throw new Error(`El auto ${auto.modelo} no es modelo 2025`);
      }
      if (!auto.ventaEnMexico) {
        throw new Error(`El auto ${auto.modelo} no se vende en México`);
      }
    });

    return true;
  }

  /**
   * Prepara el contexto para la recomendación
   * @param {string} profesion
   * @param {string} personalidad
   * @param {string} hobby
   * @returns {Object}
   */
  crearContextoRecomendacion(profesion, personalidad, hobby) {
    return {
      profesion: profesion.trim(),
      personalidad: personalidad.trim(),
      hobby: hobby.trim(),
      restricciones: {
        año: 2025,
        pais: 'México',
        cantidad: 3
      }
    };
  }
}
