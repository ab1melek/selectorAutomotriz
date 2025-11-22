#!/bin/bash

# Script de ejemplos para probar el sistema de recomendación de autos

echo "🚗 Sistema de Recomendación de Autos 2025 - México"
echo "=================================================="
echo ""
echo "Este script muestra ejemplos de cómo probar la aplicación"
echo ""

# Verifica que se haya instalado npm packages
if [ ! -d "node_modules" ]; then
    echo "⚠️  Instalando dependencias..."
    npm install
    echo ""
fi

echo "Ejemplo 1: INGENIERO DEPORTIVO (Ama tecnología)"
echo "───────────────────────────────────────────────"
echo "Comando: node src/interface/cli/index.js \"ingeniero\" \"deportivo\" \"tecnología\""
echo ""

read -p "¿Presiona Enter para ejecutar?"
node src/interface/cli/index.js "ingeniero" "deportivo" "tecnología"

echo ""
echo "=================================================="
echo ""
echo "Ejemplo 2: DOCTOR FAMILIAR (Ama viajar)"
echo "───────────────────────────────────────────────"
echo "Comando: node src/interface/cli/index.js \"doctor\" \"familiar\" \"viajes\""
echo ""

read -p "¿Presiona Enter para ejecutar?"
node src/interface/cli/index.js "doctor" "familiar" "viajes"

echo ""
echo "=================================================="
echo ""
echo "Ejemplo 3: EJECUTIVO ELEGANTE (Ama golf)"
echo "───────────────────────────────────────────────"
echo "Comando: node src/interface/cli/index.js \"ejecutivo\" \"elegante\" \"golf\""
echo ""

read -p "¿Presiona Enter para ejecutar?"
node src/interface/cli/index.js "ejecutivo" "elegante" "golf"

echo ""
echo "=================================================="
echo ""
echo "✨ Ejemplos completados"
echo ""
echo "Para ver los resultados guardados:"
echo "  cat resultado_recomendacion.json"
echo ""
