<div align="center">

# Act 5. Introducción a React - Fundamentos y Primer Componente
---

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

**Tecnológico Nacional de México - Instituto Tecnológico de Oaxaca**

| | |
|---|---|
| **Carrera** | Ingeniería en Sistemas Computacionales |
| **Materia** | Programación Web |
| **Docente** | Adelina Martínez |
| **Actividad** | Act 5. Introducción a React |
| **Alumno** | Sánchez Hernández Diego Alonso |
| **Fecha de entrega** | 10 de julio del 2026 |

[![GitHub Diego](https://img.shields.io/badge/GitHub-Diego-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/diegooash)
[![GitHub Repo](https://img.shields.io/badge/Repositorio-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/diegooash/t3_act5_react)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://diegooash.github.io/t3_act5_react/)

</div>

---

## Sobre el Proyecto

Mini aplicación interactiva construida con React y Vite para llevar el registro de goles en partidos de fútbol. Permite agregar nuevos encuentros mediante un pequeño formulario, sumar goles de forma independiente para cada equipo usando estados, y finalizar los partidos.

Conceptos de React aplicados en el código
Para cumplir con los objetivos de aprendizaje de la actividad, la aplicación implementa los siguientes fundamentos:
1.  **Componentes Funcionales:** La interfaz está dividida en piezas de código reutilizables y organizadas (ej. `<App />`, `<Encabezado />`, `<Partido />`).
2.  **Props (Propiedades):** Se comunican datos entre componentes. Por ejemplo, el componente padre (`App`) le envía al componente hijo (`Partido`) el nombre de los equipos y la función para finalizar el encuentro.
3.  **Estado (useState):** * *Estado Global:* Se usa en `App.jsx` para almacenar y actualizar el arreglo de todos los partidos activos.
    * *Estado Local:* Se usa en `Partido.jsx` para llevar la cuenta de los goles de cada equipo.
4.  **Renderizado Dinámico y Keys:** Se utiliza la función `.map()` de JavaScript para recorrer el arreglo de partidos y renderizar un componente `<Partido />` por cada uno, asignándoles una propiedad `key` única generada con `Date.now()` para optimizar el rendimiento.
5.  **Manejo de Eventos:** Implementación de eventos de React como `onClick` para los botones de goles/eliminar, y `onSubmit` para el formulario.

---

##  Cuestionario

**a) ¿Qué diferencia hay entre props y state en React?**
Las `props` son propiedades de solo lectura que se usan para pasar información de un componente padre a un componente hijo (como cuando le pasamos los nombres de los equipos al componente `Partido`). El `state` (estado) es información interna y privada del componente que puede cambiar a lo largo del tiempo (como el marcador de goles) y que, al modificarse, hace que el componente se vuelva a renderizar automáticamente.

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
Es importante porque las `keys` ayudan a React a identificar exactamente qué elementos han cambiado, se han agregado o se han eliminado dentro de un arreglo. Esto mejora el rendimiento y evita errores visuales al actualizar la lista dinámica, asegurando que cada componente (como cada partido individual) conserve su propio estado de forma correcta sin mezclarse con los demás.

**c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**
La función `useState` es un "hook" que nos permite crear variables dentro de un componente que React vigila constantemente. Si usamos la función que nos devuelve `useState` para modificar esa variable, React actualiza la pantalla de forma automática para reflejar el nuevo valor. 
*Ejemplo en la app:* Lo usé en el componente `Partido.jsx` para declarar `const [golesLocal, setGolesLocal] = useState(0)`. Cada vez que hago clic en el botón de "+1 Gol", uso `setGolesLocal` para actualizar la puntuación y se ve reflejado en el marcador al instante.

**d) Enlace del repositorio de GitHub:**
[https://github.com/diegooash/t3_act5_react](https://github.com/diegooash/t3_act5_react)

**e) Enlace de GitHub Pages:**
[https://diegooash.github.io/t3_act5_react/](https://diegooash.github.io/t3_act5_react/)
