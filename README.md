🍸 Cocktail Explorer

Una aplicación web desarrollada en React que permite explorar diferentes cócteles utilizando la Cocktail DB API
. Los usuarios pueden buscar bebidas, ver detalles y navegar entre diferentes páginas de la app.

🚀 Tecnologías utilizadas

React (con Vite)

React Router (navegación entre vistas)

Hooks de React:

useState para manejar estados locales

useEffect para efectos secundarios y llamadas a la API

useCallback para optimizar funciones y evitar renders innecesarios

useContext para manejo de contexto global (estado global de cócteles)

useRef para manejar referencias en elementos del DOM (input search)

📂 Estructura del proyecto
src/
├── assets/           # Logos de la página
├── components/       # Componentes reutilizables (Cocktail, CocktailsList Navbar, Loading, etc.)
├── pages/            # Páginas principales (Home, About, CocktailDetail, About, NotFound)
├── services/         # Archivo de React Context
├── styles/           # Estilos globales o módulos CSS
├── App.jsx           # Componente principal
└── main.jsx          # Punto de entrada


🌟 Funcionalidades principales

🔎 Búsqueda de cócteles por nombre o categoría

📜 Listado dinámico de resultados obtenidos desde la API

🍹 Vista detallada de cada cóctel (ingredientes, instrucciones, imagen)

📌 Navegación con React Router (Home, Detalles, About, ErrorPage)

🌓 Gestión de estado global con Context API

🎨 Diseño modular y responsive


⚙️ Instalación y ejecución

Clonar el repositorio:

git clone https://github.com/Juan-LozanoDev/Cocktail-react.git
cd Cocktail page


Instalar dependencias:

pnpm install


Ejecutar el servidor de desarrollo:

pnpm run dev


Abrir en el navegador:

http://localhost:5173


🔗 API utilizada

Se consume la API pública de TheCocktailDB
.
Ejemplo de endpoint:

https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita