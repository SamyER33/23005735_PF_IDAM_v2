
## Brenda Samara Escobar Avila

## 23005735

# To-Do List App

## Descripción
La **To-Do List App** es una aplicación sencilla para gestionar tareas pendientes. Permite agregar, listar, completar y eliminar tareas, así como visualizar los detalles de cada una. Esta herramienta es ideal para organizar actividades personales o profesionales.

---

## Características
1. **Pantalla de inicio**
    - Pantalla inicial donde se muestra un mensaje de bienvenida.
    - Desde aquí, el usuario puede navegar hacia la lista de tareas.
**Elementos:**
    - Mensaje de bienvenida: "Bienvenida, Brenda Samara Escobar Avila."
    - Botón: "Ir a la Lista de Tareas".

2. **Pantalla de Lista de Tareas**
    - Muestra todas las tareas pendientes y completadas.
    - Las tareas completadas tienen un fondo verde y un check estático en la columna "Completada".
    - Permite navegar a los detalles de una tarea o agregar una nueva.
**Elementos:**
    - Tabla con columnas:
        - Título: Nombre de la tarea.
        - Descripción: Breve descripción de la tarea.
        - Tipo: Tipo de tarea (Trabajo, Casa, etc.).
        - Completada: Check estático para tareas completadas.
    - Botón: "Agregar Nueva Tarea".
    - Botón: "Volver a la pantalla de inicio".
**Interacción:**
    - Al hacer clic en una tarea, se redirige a la pantalla de detalles de esa tarea.

3. **Pantalla de Agregar Tarea**
    - Permite al usuario ingresar una nueva tarea.
    - Los campos requeridos son: Título, Descripción y Tipo.
**Elementos:**
    - Formulario con los campos:
        - Título: Campo de texto.
        - Descripción: Área de texto.
        - Tipo: Campo de texto editable.
    - Botones:
        - "Agregar": Agrega la tarea y redirige a la lista.
        - "Cancelar": Regresa a la lista de tareas sin guardar.

4. **Pantalla de Detalles de Tarea**
    - Muestra los detalles completos de una tarea seleccionada.
    - Permite marcar la tarea como completada o eliminarla.
**Elementos:**
    - Detalles mostrados:
        - Título: Nombre de la tarea.
        - Descripción: Breve descripción.
        - Tipo: Tipo de tarea.
        - Estado: Pendiente o Completada.
    - Botones:
        - "Marcar como Completada": Cambia el estado de la tarea (Deshabilitado si ya está completada).
        - "Eliminar Tarea": Borra la tarea.
        - "Regresar": Redirige a la lista de tareas.
**Interacción:**
    - Cambiar el estado a "Completada" actualiza la lista al regresar.

5. **Mensajes de Alerta**
    - Sistema de mensajes que informa al usuario sobre acciones realizadas exitosamente o errores.
**Tipos de Alertas:**
    - Éxito: Verde, muestra mensajes como "Tarea agregada con éxito."
    - Éxito: Verde, muestra mensajes como "La tarea fue eliminada."
    - Error: Rojo, muestra mensajes como "Todos los campos son obligatorios."
**Ubicación:**
    - Visible en la parte superior de las pantallas.
    - Desaparece automáticamente tras 3 segundos.

**Flujo de Experiencia de Usuario (UX)**
    - El usuario abre la aplicación y ve la pantalla de bienvenida.
    - Navega a la lista de tareas y visualiza todas las tareas pendientes y completadas.
    **Puede:**
        - Seleccionar una tarea para ver sus detalles.
        - Agregar una nueva tarea.
        - En los detalles de una tarea, puede marcarla como completada o eliminarla.
        - Los cambios se reflejan en la lista de tareas al regresar.

**Nota:**
    - La aplicación es intuitiva con botones claros y un sistema de alertas que confirma las acciones del usuario.


# Procedimiento para Probar la Aplicación de Gestión de Tareas

# Requisitos previos
    - Instalar Node.js: Asegúrate de tener Node.js (v16 o superior recomendado) instalado en tu máquina.
    - Instalar un administrador de paquetes: Si tienes Node.js instalado, ya cuentas con npm. 
    - Clonar el repositorio: Obtén el código fuente de la aplicación desde el repositorio proporcionado (GitHub o similar).

**Instrucciones para ejecutar la aplicación**
    - Abre una terminal y ejecuta:
       cd 23005735_PF

    - Instalar dependencias:
        - Ejecuta el siguiente comando dentro del directorio del proyecto:
            npm install
            (Esto instalará todas las dependencias necesarias para ejecutar la aplicación.)

**Ejecutar el servidor de desarrollo:**
    - Una vez instaladas las dependencias, inicia la aplicación con:
        npm start
        (Esto abrirá una nueva pestaña en tu navegador predeterminado con la aplicación en http://localhost:3000.)
    **Pruebas funcionales**
    - Pantalla de Inicio:
        - Verifica que aparece un mensaje de bienvenida con opciones para navegar.
        - Haz clic en “Agregar Tarea” para acceder a la pantalla correspondiente.
        - Pantalla Agregar Tarea:
            - Completa los campos de Título, Descripción, y Tipo.
            - Haz clic en Agregar para añadir la tarea a la lista.
            - Si dejas algún campo vacío, verifica que aparece una alerta indicando "Todos los campos son obligatorios".
        - Pantalla Lista de Tareas:
            - Confirma que las tareas agregadas aparecen en la lista.
            - Las tareas completadas deben mostrar un fondo verde pálido y un check en la columna de estado.
        - Pantalla Detalles de Tarea:
            - Haz clic en una tarea para acceder a sus detalles.
            - Verifica que se muestra el estado de la tarea como “Pendiente” o “Completada”.
            - Prueba los botones de Marcar como Completada y Eliminar Tarea.
            - Tras completar o eliminar una tarea, vuelve a la lista y confirma los cambios.

**Estructura del Proyecto:**
    - src/: Carpeta principal que contiene todo el código fuente.
    - context/: Código relacionado con el manejo del estado global.
    - components/: Componentes reutilizables como listas, alertas, etc.
    - screens/: Pantallas principales (Agregar Tarea, Lista de Tareas, Detalles).
    - routes/: Configuración de rutas de la aplicación.
    - styles/: Archivos CSS para estilos personalizados.
    - Capturas/: Capturas de pantalla de la aplicación móvil en funcionamiento.

**Pruebas adicionales**
    - Validación de campos:
        Intenta enviar un formulario incompleto y confirma que la alerta aparece correctamente.
    - Integridad de datos:
        Verifica que las tareas permanecen en la lista tras actualizaciones (completar o eliminar).
    - Interacción entre pantallas:
        Navega entre las pantallas y confirma que los datos permanecen consistentes.
    - Cierre del servidor:
        Cuando termines de probar la aplicación, puedes detener el servidor presionando Ctrl + C en la terminal donde ejecutaste npm start.
