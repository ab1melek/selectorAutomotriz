/**
 * AutoRepository - Interfaz abstracta para repositorios de autos
 * Define el contrato que deben cumplir todas las implementaciones
 */
export class AutoRepository {
  /**
   * Obtiene todos los autos disponibles
   * @returns {Promise<Array>} Lista de autos
   */
  async obtenerTodos() {
    throw new Error('Método obtenerTodos() debe ser implementado');
  }

  /**
   * Obtiene autos filtrados por segmento
   * @param {string} segmento - Segmento del auto
   * @returns {Promise<Array>} Lista de autos del segmento
   */
  async obtenerPorSegmento(segmento) {
    throw new Error('Método obtenerPorSegmento() debe ser implementado');
  }

  /**
   * Obtiene un auto por su ID
   * @param {string} id - ID del auto
   * @returns {Promise<Object|null>} Auto encontrado o null
   */
  async obtenerPorId(id) {
    throw new Error('Método obtenerPorId() debe ser implementado');
  }
}
