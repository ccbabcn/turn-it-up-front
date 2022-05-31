# Capa de datos:

- User
- Projects
- UI

## Modificaciones capa de datos

- User:
  - Estado: Logged / No logged
  - Projectos propios: añadir / quitar
  - Projectos apuntado: añadir / quitar
- Projects:
  - Borrar project
  - Crear project
  - Modificar Project
  - Cargar projectos
  - Cargar projectos por usuario
  - Cargar projecto por ID
- UI
  - Cargando: true / false
  - Modal: cambia texto / cambiar clase

---

## Componentes

- Pager
- Filter

- Button:

  - Recibe
    - Un texto
    - Una clase
    - Una acción
  - Renderiza:
    - Un boton en funcion del texto y clase recibidos.

- Project

  - Recibe:
    - El nombre de un projecto
    - El tipo de un proyecto
    - La imagen de un proyecto
    - Un listado de instrumentos
  - Renderiza:
    - Un título con el nombre del proyecto
    - La imagen del proyecto recibida
    - un texto fijo con una parte variable en funcion del tipo y el numero de musicos
    - un texto fijo y una variable en funcion del
    - Hasta 3 botones pasandoles texto, clase y acción.

- ProjectDetails

  - Recibe:
    - El nombre de un projecto
    - La imagen de un proyecto
    - La descripción de un projecto
    - Un listado de instrumentos
    - Un listado de músicos
  - Renderiza:
    - Hasta 3 botones pasandoles texto, clase y acción.

- ProjectList
  - Recibe:
    - Un listado de proyectos
  - Renderiza:
    - Una lista de Projects en funcion del listado recibido
- LoadingSpinner
  - Recibe: El estado cargando de la UI
  - Renderiza: un spiner de carga en funcion del estado de la UI
- LogedInChecker

- FormRegister

  - Renderiza:
    - un formulario con los campos name, user name, password y roles
    - un boton de register

- Modal
  - Recibe: el estado modal de la UI
  - Renderiza: Un mensaje modal en funcion del estado recibido
