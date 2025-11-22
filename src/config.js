/**
 * Config - Configuración de la aplicación
 * Maneja las variables de entorno y configuración global
 */

import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

export const config = {
  // Configuración de Gemini
  gemini: {
    apiKey: process.env.GEMINI_API_KEY || null,
    modelo: 'gemini-2.5-flash',
    estaConfigurado: !!process.env.GEMINI_API_KEY
  },

  // Configuración del servidor
  server: {
    puerto: parseInt(process.env.PORT || '3000', 10),
    ambiente: process.env.NODE_ENV || 'development'
  },

  // Configuración de la aplicación
  app: {
    nombre: 'Sistema de Recomendación de Autos 2025',
    version: '1.0.0',
    pais: 'México',
    anioAutos: 2025,
    cantidadRecomendaciones: 3
  }
};

/**
 * Valida que la configuración sea correcta
 */
export function validarConfiguracion() {
  if (!config.gemini.estaConfigurado) {
    console.warn(
      '⚠️  ADVERTENCIA: GEMINI_API_KEY no está configurada\n' +
      '   La aplicación funcionará en modo SIMULADO\n' +
      '   Para usar Gemini 2.5 Flash, configura .env:\n' +
      '   GEMINI_API_KEY=tu-clave-aqui'
    );
  }

  console.log(
    `✅ Configuración cargada:\n` +
    `   - Ambiente: ${config.server.ambiente}\n` +
    `   - Gemini: ${config.gemini.estaConfigurado ? '✓ Configurado' : '✗ Modo simulado'}\n` +
    `   - Puerto: ${config.server.puerto}`
  );
}
