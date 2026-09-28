# CountryApp
Este proyecto fue creado con Angular 22.1.7 siguiendo el curso de [Fernando Herrera en DevTalles](https://cursos.devtalles.com/courses/angular-moderno). Aunque he seguido la misma idea y estructura general del curso, he aprovechado el desarrollo para implementar varias mejoras y tomar algunas decisiones diferentes. Por ese motivo, es normal que parte del código no coincida exactamente con los ejemplos mostrados durante las clases.
 

## Cambios respecto al proyecto del curso 
Entre las principales diferencias se encuentran:
 
- Uso de una API más moderna para la obtención de datos de países.
- Modelo de país más completo, incluyendo información adicional como:
    - nombre oficial
    - subregión
    - superficie
    - divisas
    - idiomas
    - husos horarios
    - gentilicio
    - tipo de gobierno
    - enlaces oficiales
- Servicio de búsquedas más genérico y reutilizable.
- Mapeo de respuestas mediante un `CountryMapper` para separar la transformación de datos de la lógica de negocio.
- Página específica para rutas inexistentes (404).
- Página específica para países no encontrados.
- Mejoras visuales y de experiencia de usuario sobre la interfaz original.
   
  Estas modificaciones tienen como objetivo practicar conceptos adicionales de Angular y aplicar pequeñas mejoras de arquitectura, mantenibilidad y experiencia de usuario.

## Dev
1. Clonar repositorio
2. [Obtener una API Key](https://restcountries.com/ 'Consigue aqui la API Key') y colocarla en [country.service.ts](src\app\country\services\country.service.ts)
3. Crear las dependencias con `npm install`
4. Iniciar el servidor de desarrollo con `ng serve`
5. Navegar a `http://localhost:4200/`

## Building
1. Ejecutar `ng build` en la terminal con la carpeta del proyecto abierta
2. Subir la carpeta `dist` al servidor
3. Desplegar :)


# CountryApp

Aplicación desarrollada con Angular 22.1.7 tomando como base el [curso de Angular Moderno de Fernando Herrera en DevTalles](https://cursos.devtalles.com/courses/angular-moderno)

Aunque la aplicación sigue la misma idea general del proyecto del curso, he aprovechado el desarrollo para implementar diversas mejoras, refactorizaciones y funcionalidades adicionales con el objetivo de practicar conceptos más allá de los ejemplos mostrados en las clases. Por ese motivo, parte de la arquitectura, la organización de componentes y algunas soluciones técnicas difieren de las implementadas durante el curso.

## Diferencias respecto al proyecto original
### Arquitectura y mantenibilidad
- Uso de un `CountryMapper` para desacoplar la transformación de datos de la lógica del servicio.
- Extracción de componentes reutilizables para reducir responsabilidades en las páginas.
- Uso de constantes tipadas (`as const`) para generar automáticamente tipos TypeScript a partir de los datos.
- Validación de parámetros de ruta utilizando tipos estrictos.
- Menor duplicación de código mediante servicios y componentes más genéricos y reutilizables.

### Gestión de datos
- Uso de una API distinta a la utilizada en el curso.
- Modelo de país ampliado con información adicional:
  - nombre oficial
  - subregión
  - superficie
  - divisas
  - idiomas
  - husos horarios
  - gentilicio
  - tipo de gobierno
  - enlaces oficiales
- Sistema de caché para evitar peticiones innecesarias a la API.
- Persistencia del estado y de determinadas búsquedas para mantener información entre recargas de página. _(implementado o en desarrollo según la versión del proyecto)_

### Experiencia de usuario
- Página específica para rutas inexistentes (404).
- Página específica para búsquedas sin resultados.
- Distinción visual entre un error de navegación y un resultado vacío.
- Mejoras de interfaz respecto a la implementación original del curso.
- URLs más consistentes y normalizadas para facilitar la navegación y el compartido de enlaces.

## Dev
1. Clonar repositorio
2. Crear las dependencias con `npm install`
3. Iniciar el servidor de desarrollo con `ng serve`
4. Navegar a `http://localhost:4200/`

## Compilación y despliegue
1. Generar una versión optimizada para producción con `ng build`
2. Subir la carpeta `dist` al servidor
3. Desplegar :)

## Créditos
Proyecto inspirado en el curso Angular Moderno de Fernando Herrera (DevTalles), adaptado y ampliado con funcionalidades propias como ejercicio de aprendizaje y práctica de buenas prácticas de desarrollo.
