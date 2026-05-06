# Simulador de Plazo Fijo

![Preview](./public/portada.avif)

Una aplicación web que permite proyectar las ganancias de un plazo fijo, calculando intereses y monto total a partir del capital invertido, el plazo en días y la TNA.

## 🛠️ Stack

- React + TypeScript
- Tailwind CSS
- Vite

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/alexidev23/pruebaTecnica

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## ⚙️ Variables de entorno

Creá un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
VITE_API_URL=tu_url_aqui
VITE_API_URL_DATA=tu_url_aqui
```

| Variable            | Descripción                                                     |
| ------------------- | --------------------------------------------------------------- |
| `VITE_API_URL`      | Endpoint de la API para el cálculo de simulación de plazo fijo  |
| `VITE_API_URL_DATA` | Endpoint de la API para obtener el historial de 20 simulaciones |

## ✨ Funcionalidades

- Simulación de plazo fijo con capital, plazo en días y TNA
- Validación de campos del formulario
- Visualización de resultados: capital invertido, intereses ganados y monto total
- Historial de simulaciones con los últimos 20 registros
- Estados de carga mientras se consulta la API
- Diseño responsive
