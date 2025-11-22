// ...existing code...
## 📝 Licencia

ISC

<!-- Añadido: instrucciones de descarga, puesta en marcha y despliegue -->
## ⬇️ Cómo descargar este repositorio

Clona el repo desde GitHub (HTTPS o SSH):

- HTTPS:
```bash
git clone https://github.com/ab1melek/selectorAutomotriz.git
cd selectorAutomotriz
```

- SSH:
```bash
git clone git@github.com:ab1melek/selectorAutomotriz.git
cd selectorAutomotriz
```

## ⚙️ Preparar e instalar dependencias

```bash
# Instalar dependencias
npm install

# Crear .env en la raíz con la clave de Gemini (no subir a Git)
# .env
# GEMINI_API_KEY=tu_api_key_aqui
```

Asegúrate de agregar `.env` a `.gitignore`:
```text
# filepath: .gitignore
.env
node_modules/
.DS_Store
```

## ▶️ Ponerlo en marcha (local)

1. Inicia el servidor en modo desarrollo:
```bash
npm run dev
```
2. Abre en el navegador:
http://localhost:3000

3. Prueba la API:
```bash
curl -X POST http://localhost:3000/api/recomendaciones \
  -H "Content-Type: application/json" \
  -d '{"profesion":"ingeniero","personalidad":"Práctico","hobby":"viajes"}'
```

## 📦 Uso (resumen rápido)

- CLI:
```bash
node src/interface/cli/index.js "<profesion>" "<personalidad>" "<hobby>"
```

- HTTP API:
POST /api/recomendaciones
Body JSON: { "profesion", "personalidad", "hobby" }

La respuesta devolverá 3 recomendaciones con `auto`, `justificacion`, `imagen` (URL).

## 🚀 Despliegue a Vercel (opcional)

1. Instala Vercel CLI (opcional):
```bash
npm install -g vercel
```
2. Configura la variable de entorno en Vercel (GEMINI_API_KEY) desde el dashboard del proyecto.
3. Despliega:
```bash
vercel --prod
```
O despliegue rápido:
```bash
vercel
```

## ✅ Comprobaciones finales

- Verifica que `.env` no esté trackeado:
```bash
git ls-files | grep -n "\.env" || echo "No está trackeado"
```
- Si `.env` ya fue commiteado:
```bash
git rm --cached .env
git commit -m "Stop tracking .env"
git push
```

## ✨ Pie de página
Hecho por Abimelek Castrezana ❤️
// ...existing code...