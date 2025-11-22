/**
 * Server HTTP - Servidor Express
 * Punto de entrada para ejecutar la aplicación como API REST
 */

import dotenv from 'dotenv';
dotenv.config();

import { crearServidorHTTP } from './routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    const app = await crearServidorHTTP();

    // Servir archivos estáticos (HTML, CSS, JS)
    app.use(express.static(path.join(__dirname, '../../..', 'public')));
    
    // Servir imágenes de autos desde la carpeta raíz /images
    app.use('/images', express.static(path.join(__dirname, '../../..', 'images')));

    app.listen(PORT, () => {
      console.log('🚗 Sistema de Recomendación de Autos 2025 - México');
      console.log('═'.repeat(60));
      console.log(`🌐 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📡 Interfaz web: http://localhost:${PORT}`);
      console.log(`📡 API disponible en http://localhost:${PORT}/api`);
      console.log('\nEndpoints disponibles:');
      console.log(`  GET  / - Interfaz web`);
      console.log(`  GET  /api/health - Estado del servicio`);
      console.log(`  POST /api/recomendaciones - Obtener recomendaciones`);
      console.log('═'.repeat(60));
    });
  } catch (error) {
    console.error('❌ Error al iniciar servidor:', error);
    process.exit(1);
  }
}

iniciarServidor();
