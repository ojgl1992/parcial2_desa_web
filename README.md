# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


El código crea un formulario en React que permite ingresar un ID, título y autor. Cuando se envía el formulario, hace una solicitud al endpoint https://api.vercel.app/blogLinks y muestra los datos en la consola. Esto permite interactuar con la API y puede ampliarse para mostrar los resultados en la interfaz de usuario.