/**
 * Entidad Auto - Dominio
 * Representa un automóvil con sus características esenciales
 */
export class Auto {
  constructor({
    id,
    marca,
    modelo,
    año,
    segmento,
    precio,
    caracteristicas,
    personalidades,
    imagen,
    ventaEnMexico
  }) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.segmento = segmento;
    this.precio = precio;
    this.caracteristicas = caracteristicas || [];
    this.personalidades = personalidades || [];
    this.imagen = imagen || null;
    this.ventaEnMexico = ventaEnMexico;

    this.validar();
  }

  validar() {
    if (!this.marca || !this.modelo) {
      throw new Error('Marca y modelo son requeridos');
    }
    if (this.año !== 2025) {
      throw new Error('Solo se permiten autos modelo 2025');
    }
    if (!this.ventaEnMexico) {
      throw new Error('El auto debe estar disponible en México');
    }
  }

  obtenerDescripcionCompleta() {
    return `${this.marca} ${this.modelo} ${this.año}`;
  }

  esAptoParaPerfil(perfil) {
    // Lógica básica de dominio para validar si el auto puede ser recomendado
    return this.ventaEnMexico && this.año === 2025;
  }
}
