# Sistema de Recomendación de Autos 2025 - México

Sistema de recomendación de automóviles basado en **Clean Architecture** que sugiere 3 vehículos modelo 2025 vendidos en México según la profesión, personalidad y hobby del usuario.

## 🏗️ Arquitectura Limpia (Clean Architecture)

El proyecto sigue los principios de Clean Architecture con separación clara de responsabilidades:

```
/src
  /domain           # Lógica de negocio pura, sin dependencias externas
  /usecases         # Casos de uso de la aplicación
  /application      # DTOs y contratos de aplicación
  /infrastructure   # Implementaciones concretas (repositorios, AI, controllers)
  /interface        # Puntos de entrada (CLI, HTTP)
```

## 📋 Requisitos

- Node.js >= 18.0.0
- npm o yarn

## 🚀 Instalación

```bash
# Instalar dependencias
npm install
```

## 💻 Uso

### CLI (Línea de Comandos)

```bash
node src/interface/cli/index.js "<profesion>" "<personalidad>" "<hobby>"
```

### Ejemplos de uso:

```bash
# Ejemplo 1: Ingeniero deportivo
node src/interface/cli/index.js "ingeniero" "deportivo" "tecnología"

# Ejemplo 2: Profesional familiar
node src/interface/cli/index.js "doctor" "familiar" "viajes"

# Ejemplo 3: Ejecutivo
node src/interface/cli/index.js "ejecutivo" "elegante" "negocios"

# Ejemplo 4: Joven urbano
node src/interface/cli/index.js "estudiante" "urbano" "música"
```

### API REST (Opcional)

Para usar como servidor HTTP, primero crea un archivo `src/interface/http/server.js`:

```bash
# Iniciar servidor (después de crear server.js)
npm run server
```

Endpoint:
```
POST http://localhost:3000/api/recomendaciones
Content-Type: application/json

{
  "profesion": "ingeniero",
  "personalidad": "deportivo",
  "hobby": "tecnología"
}
```

## 📦 Estructura del Proyecto

```
selectorAutomotriz/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   │   └── Auto.js              # Entidad principal
│   │   ├── repositories/
│   │   │   └── AutoRepository.js    # Interfaz del repositorio
│   │   └── services/
│   │       └── AutoRecommenderService.js  # Lógica de dominio
│   ├── usecases/
│   │   └── RecommendAutosUseCase.js # Caso de uso principal
│   ├── application/
│   │   └── DTOs/
│   │       ├── RecommendAutosRequestDTO.js
│   │       └── RecommendAutosResponseDTO.js
│   ├── infrastructure/
│   │   ├── repositories/
│   │   │   └── AutosStaticRepository.js  # Datos de autos reales
│   │   ├── ai/
│   │   │   └── AiClient.js          # Cliente de IA (Claude Haiku 4.5)
│   │   └── controllers/
│   │       └── RecommendAutosController.js
│   └── interface/
│       ├── cli/
│       │   └── index.js             # CLI principal
│       └── http/
│           └── routes.js            # Rutas HTTP
├── package.json
└── README.md
```

## 🎯 Reglas de Negocio

1. ✅ Solo autos modelo **2025**
2. ✅ Solo autos vendidos oficialmente en **México**
3. ❌ No se mencionan colores
4. ❌ No se incluyen autos concepto o prototipos
5. ✅ Justificación basada en: **profesión + personalidad + hobby**
6. ✅ Todo en **español**

## 🚗 Autos Disponibles

El sistema incluye autos reales de marcas como:
- Mazda (CX-50, Mazda3 Turbo, CX-90)
- Toyota (Camry, Highlander, Corolla Cross)
- Honda (Civic, CR-V, Accord)
- Kia (Sportage, K5, Seltos)
- Hyundai (Tucson, Sonata)
- Nissan (Kicks, X-Trail)
- Volkswagen (Jetta, Tiguan)
- Chevrolet (Blazer, Equinox)
- BMW (X3, 330i)
- Mercedes-Benz (GLC, Clase C)

## 🧠 Inteligencia Artificial

El sistema utiliza Claude Haiku 4.5 (simulado) para generar recomendaciones personalizadas que consideran:
- Perfil profesional
- Rasgos de personalidad
- Hobbies y aficiones

## 📄 Salida

El resultado se guarda automáticamente en `resultado_recomendacion.json` con el formato:

```json
{
  "exito": true,
  "perfil": {
    "profesion": "ingeniero",
    "personalidad": "deportivo",
    "hobby": "tecnología"
  },
  "recomendaciones": [
    {
      "marca": "Mazda",
      "modelo": "Mazda3 Turbo",
      "año": 2025,
      "segmento": "Sedán Deportivo",
      "precio_aproximado": "$480,000 - $580,000 MXN",
      "justificacion": "...",
      "imagen_prompt": "..."
    }
  ]
}
```

## 🏛️ Principios de Clean Architecture

### Dependencias Unidireccionales
- **Domain** ← Usecases ← Application ← Infrastructure ← Interface
- El dominio no depende de nada
- La infraestructura depende del dominio (inversión de dependencias)

### Capas:
1. **Domain**: Lógica de negocio pura
2. **UseCases**: Orquestación de casos de uso
3. **Application**: DTOs y contratos
4. **Infrastructure**: Implementaciones concretas
5. **Interface**: Puntos de entrada (CLI, HTTP)

## 📝 Licencia

ISC
