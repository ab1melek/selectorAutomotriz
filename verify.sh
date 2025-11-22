#!/bin/zsh
# TEST SCRIPT - Verifica que todo funcione correctamente

echo "═══════════════════════════════════════════════════════════════"
echo "🚗 VERIFICACIÓN DEL PROYECTO - Sistema de Recomendación Autos"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar Node.js
echo "1️⃣  Verificando Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "${GREEN}✓${NC} Node.js instalado: $NODE_VERSION"
else
    echo "${RED}✗${NC} Node.js no instalado"
    exit 1
fi

# 2. Verificar npm
echo ""
echo "2️⃣  Verificando npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "${GREEN}✓${NC} npm instalado: $NPM_VERSION"
else
    echo "${RED}✗${NC} npm no instalado"
    exit 1
fi

# 3. Verificar node_modules
echo ""
echo "3️⃣  Verificando dependencias..."
if [ -d "node_modules" ]; then
    echo "${GREEN}✓${NC} node_modules existe"
else
    echo "${YELLOW}⚠${NC} node_modules no encontrado, instalando..."
    npm install > /dev/null 2>&1
    if [ -d "node_modules" ]; then
        echo "${GREEN}✓${NC} Dependencias instaladas"
    else
        echo "${RED}✗${NC} Error al instalar dependencias"
        exit 1
    fi
fi

# 4. Verificar archivos principales
echo ""
echo "4️⃣  Verificando archivos del proyecto..."

FILES=(
    "src/config.js"
    "src/domain/entities/Auto.js"
    "src/domain/repositories/AutoRepository.js"
    "src/domain/services/AutoRecommenderService.js"
    "src/usecases/RecommendAutosUseCase.js"
    "src/application/DTOs/RecommendAutosRequestDTO.js"
    "src/application/DTOs/RecommendAutosResponseDTO.js"
    "src/infrastructure/repositories/AutosStaticRepository.js"
    "src/infrastructure/ai/AiClient.js"
    "src/infrastructure/controllers/RecommendAutosController.js"
    "src/interface/cli/index.js"
    "src/interface/http/routes.js"
    "src/interface/http/server.js"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "${GREEN}✓${NC} $file"
    else
        echo "${RED}✗${NC} $file - FALTA"
    fi
done

# 5. Verificar documentación
echo ""
echo "5️⃣  Verificando documentación..."

DOCS=(
    "README.md"
    "QUICK_START.md"
    "GUIA_PRUEBA.md"
    "PROYECTO_GENERADO.md"
    "GEMINI_CONFIG.md"
)

for doc in "${DOCS[@]}"; do
    if [ -f "$doc" ]; then
        SIZE=$(wc -l < "$doc")
        echo "${GREEN}✓${NC} $doc ($SIZE líneas)"
    else
        echo "${RED}✗${NC} $doc - FALTA"
    fi
done

# 6. Verificar configuración
echo ""
echo "6️⃣  Verificando configuración..."

if [ -f ".env" ]; then
    if grep -q "GEMINI_API_KEY" .env; then
        echo "${GREEN}✓${NC} .env existe"
    else
        echo "${RED}✗${NC} .env no tiene GEMINI_API_KEY"
    fi
else
    echo "${RED}✗${NC} .env no existe"
fi

if [ -f ".env.example" ]; then
    echo "${GREEN}✓${NC} .env.example existe"
else
    echo "${RED}✗${NC} .env.example no existe"
fi

# 7. Test de sintaxis
echo ""
echo "7️⃣  Verificando sintaxis JavaScript..."
SYNTAX_OK=true

for file in src/**/*.js; do
    if node -c "$file" 2>/dev/null; then
        echo "${GREEN}✓${NC} $file"
    else
        echo "${RED}✗${NC} $file - ERROR DE SINTAXIS"
        SYNTAX_OK=false
    fi
done

if [ "$SYNTAX_OK" = true ]; then
    echo "${GREEN}✓${NC} Sintaxis OK en todos los archivos"
fi

# 8. Prueba de ejecución (simple)
echo ""
echo "8️⃣  Probando CLI (sin output completo)..."
if timeout 5 node src/interface/cli/index.js "test" "test" "test" > /dev/null 2>&1; then
    echo "${GREEN}✓${NC} CLI ejecutable"
else
    echo "${RED}✗${NC} CLI error al ejecutar"
fi

# Resumen
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "${GREEN}✅ VERIFICACIÓN COMPLETADA${NC}"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "Próximos pasos:"
echo ""
echo "1️⃣  Configurar Gemini (opcional):"
echo "    nano .env"
echo "    GEMINI_API_KEY=tu-clave-aqui"
echo ""
echo "2️⃣  Ejecutar el sistema:"
echo '    node src/interface/cli/index.js "profesion" "personalidad" "hobby"'
echo ""
echo "3️⃣  Ejemplos:"
echo '    node src/interface/cli/index.js "ingeniero" "deportivo" "tecnología"'
echo '    node src/interface/cli/index.js "doctor" "familiar" "viajes"'
echo ""
echo "4️⃣  Leer documentación:"
echo "    cat QUICK_START.md"
echo ""
