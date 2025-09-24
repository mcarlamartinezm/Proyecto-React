# Proyecto Final - Web App E-commerce Pokémon.

## Descripción
Este proyecto es una Single Page Application (SPA) de e-commerce desarrollada con **React**.  
Permite simular una web que venden pokemones como un producto adquerible, también muestra como criarlos y como ser un maestro pokemón. Todo en la dinámica de una tienda web de productos.

## Funcionalidades
- Listado dinámico de productos y vista de detalle.  
- Componente **ItemCount** para seleccionar cantidad y validar stock.  
- Carrito de compras con **Context**: muestra productos, cantidades y totales.  
- Navegación SPA con **React Router** entre catálogo, categorías, detalle, carrito y checkout.  
- Registro de compras en **Firebase Firestore**, generando un ID de orden único.  
- Notificaciones y mensajes condicionales (ej: “carrito vacío”, “producto sin stock”).


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Instalación y uso
1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/mcarlamartinezm/Proyecto-React.git

   Instalación de dependencias: npm install
   Modo ejecución: npm run dev