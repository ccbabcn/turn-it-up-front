# RESUMEN

Projector final Bootcamp ISDI CODERS 2022-04 API MERN con CRUD de proyectos musicales.

Funcionamiento de la web:

- La App dispone de dos páginas públicas, login y register, cualquier usuario que no se haya logeado será redirigido a la primera para que inicie sesión.

- Un usuario sin cuenta puede registrarse en cualquier momento desde la página de registro.

- Los usuarios que han iniciado sesión pueden acceder al listado público de proyectos musicales donde pueden ver los proyectos que han creado (con opción de editar y eliminar) así como los proyectos creados por otros usuarios de los que podrán acceder a su página de detalle.

- El usuario puede aplicar filtros por géneros musicales o por roles de músico tanto en el listado principal como en el listado de proyectos creados.

- El usuario puede crear proyectos accediendo a través de créate del menú de navegación.

- El usuario puede editar cualquiera de sus proyectos, ya sea desde el listado público como del privado mediante el botón edit.

- Con el botón logout se modifica el estado logged del usuario y se remueve su token del local storage.

## Componentes

- Filter
- Footer
- Formulario registro / login
- Formulario edit/create
- Header
- LogChecker
- NotLogChecker
- Navigation
- Paginator
- Project
- ProjectList
- Spinner

# Capa de datos:

- User
- Projects
- UI

## Modificaciones capa de datos

- User:

  - Estado: Logged / No logged
  - Projectos propios: añadir / Borrar

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
