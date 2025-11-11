## Mi Portafolio

Este es mi **portafolio web**, desarrollado con **Next.js**, **React** y **Tailwind CSS**.
El proyecto utiliza **TypeScript** para garantizar un código más seguro y mantenible, junto con **React Icons** para incorporar iconografía moderna y accesible.
Además, integré **Material UI** para la implementación de modales interactivos, mejorando la experiencia del usuario con un diseño limpio y fluido.

**Ver el portafolio** proximamente

### **Implementación de modal para los componentes del portafolio**

1. Instalar dependencias necesarias:  
   ```bash
   npm install @mui/material @emotion/react @emotion/styled

2. Elegir un modal desde la documentación oficial de *Material UI*:
🔗 https://mui.com/material-ui/react-modal/

3. Copiar el ejemplo base del modal y pegarlo en un nuevo archivo del proyecto.

4. Personalizar el estilo del modal (colores, sombras, bordes) con la propiedad sx o el objeto style.

5. Reemplazar el botón de apertura por las funciones onClick de los ítems del Header.

6. Configurar el contenido dinámico para mostrar cada componente dentro del modal (por ejemplo: About, Experience, Projects).

7. OPCIONAL. Ajustar el fondo del modal para usar efecto borroso con backdropFilter: "blur(8px)".

8. Verificar que cada ítem del Header abra correctamente su contenido en el modal