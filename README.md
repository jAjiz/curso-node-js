# 📚 Curso de Node.js

Este repositorio contiene todos los ejercicios y proyectos desarrollados durante el **Curso de Node.js** impartido por [**midudev**](https://www.youtube.com/@midudev) en su canal de YouTube.

🎥 **Enlace al curso completo:** [Curso de Node.js desde cero](https://www.youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7)

## 🎯 Objetivo del Repositorio

Este proyecto ha sido fundamental para ampliar mis conocimientos en el ecosistema de JavaScript, específicamente en el entorno de Node.js. A través de este curso, he profundizado en conceptos clave del desarrollo backend, frameworks modernos y mejores prácticas de desarrollo con JavaScript del lado del servidor.

## 📖 Contenido del Curso

### **Clase 1: Fundamentos de Node.js**
En esta clase se cubren los conceptos básicos y módulos nativos de Node.js:

- **Módulos del sistema operativo (`os`)**: Obtención de información del sistema
- **Sistema de archivos (`fs`)**: 
  - Lectura y escritura de archivos (sync y async)
  - Uso de Promises y async/await
  - Manejo de operaciones paralelas
- **Rutas (`path`)**: Manipulación de rutas de archivos
- **Procesos (`process`)**: Información y control de procesos
- **HTTP nativo**: Creación de servidores básicos
- **Gestión de puertos**: Búsqueda de puertos disponibles
- **Módulos ES (ESM) vs CommonJS (CJS)**: Diferencias y uso de ambos sistemas de módulos

### **Clase 2: Servidores HTTP y Express**
Introducción al desarrollo de servidores web y uso del framework Express:

- **Servidor HTTP nativo**: Creación de servidores sin frameworks
- **Routing básico**: Implementación de rutas manualmente
- **Express.js**: 
  - Introducción al framework más popular de Node.js
  - Configuración y middlewares
  - Manejo de JSON
  - Routing simplificado
  - Gestión de requests y responses
- **Nodemon**: Herramienta de desarrollo para auto-reload

**Frameworks aplicados:**
- 🚀 **Express 5.1.0**: Framework web minimalista y flexible para Node.js

### **Clase 3: REST API con Express**
Desarrollo de una API RESTful completa con validaciones y CORS:

- **REST API completa**: Implementación de todos los métodos HTTP (GET, POST, PUT, PATCH, DELETE)
- **CORS (Cross-Origin Resource Sharing)**: 
  - Configuración de orígenes permitidos
  - Manejo de headers
- **Validación de datos con Zod**:
  - Schemas de validación
  - Validación completa y parcial
- **Gestión de películas**: CRUD completo
- **Filtrado y búsqueda**: Query parameters
- **Códigos de estado HTTP**: Uso correcto de códigos de respuesta

**Frameworks y librerías aplicadas:**
- 🚀 **Express 5.1.0**: Framework web
- 🛡️ **CORS 2.8.5**: Middleware para manejar políticas de CORS
- ✅ **Zod 4.0.5**: Librería de validación y parsing de schemas con TypeScript-first

### **Clase 4: Arquitectura MVC**
Implementación de una arquitectura profesional siguiendo el patrón Modelo-Vista-Controlador:

- **Patrón MVC (Model-View-Controller)**:
  - Separación de responsabilidades
  - Código más mantenible y escalable
- **Estructura del proyecto**:
  - **Models**: Lógica de acceso a datos
  - **Controllers**: Lógica de negocio
  - **Routes**: Definición de endpoints
  - **Middlewares**: Funciones intermedias (CORS, autenticación, etc.)
  - **Schemas**: Validaciones con Zod
- **ES Modules**: Uso completo de import/export (type: "module")
- **Mejores prácticas**: Código limpio y organizado

**Frameworks y librerías aplicadas:**
- 🚀 **Express 5.1.0**: Framework web
- 🛡️ **CORS 2.8.5**: Middleware de CORS
- ✅ **Zod 4.0.5**: Validación de datos

## 🛠️ Tecnologías y Herramientas

- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor
- **Express.js**: Framework web para Node.js
- **Zod**: Validación de esquemas TypeScript-first
- **CORS**: Manejo de políticas de intercambio de recursos de origen cruzado
- **Nodemon**: Herramienta de desarrollo para reinicio automático
- **ESLint Standard**: Linter para mantener código consistente
- **ES Modules y CommonJS**: Ambos sistemas de módulos

## 🚀 Instalación y Uso

### Requisitos previos
- Node.js instalado (versión 18 o superior recomendada)
- npm o yarn como gestor de paquetes

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jAjiz/curso-node-js.git

# Entrar al directorio
cd curso-node-js

# Instalar dependencias generales
npm install

# Instalar dependencias de cada clase
cd clase-2 && npm install
cd ../clase-3 && npm install
cd ../clase-4 && npm install
```

### Ejecutar ejemplos

```bash
# Clase 1: Ejecutar cualquier archivo
node clase-1/1.os-info.js

# Clase 2: Servidor Express con auto-reload
cd clase-2
npm run dev:3

# Clase 3: API REST
cd clase-3
node app.js

# Clase 4: API con arquitectura MVC
cd clase-4
node app.js
```

## 📚 Aprendizajes Clave

Este curso me ha permitido:

1. **Dominar los fundamentos de Node.js**: Comprender cómo funciona el runtime de JavaScript en el servidor, el event loop, y la naturaleza asíncrona de Node.js.

2. **Trabajar con módulos nativos**: Aprender a utilizar módulos del core de Node.js como `fs`, `http`, `path`, `os`, y `process`.

3. **Desarrollar APIs REST**: Crear APIs completas con Express, implementando todos los métodos HTTP y siguiendo las mejores prácticas.

4. **Validación de datos robusta**: Utilizar Zod para crear esquemas de validación type-safe, mejorando la seguridad y confiabilidad de las aplicaciones.

5. **Manejo de CORS**: Entender y configurar correctamente las políticas de intercambio de recursos entre diferentes orígenes.

6. **Arquitectura de software**: Implementar el patrón MVC para crear aplicaciones más mantenibles, escalables y profesionales.

7. **ES Modules**: Trabajar con el sistema de módulos moderno de JavaScript (import/export) y entender sus diferencias con CommonJS.

8. **Mejores prácticas**: Escribir código limpio, organizado y siguiendo convenciones de la comunidad.

## 💡 Reflexión Personal

Este curso ha sido una experiencia enriquecedora que me ha permitido **ampliar significativamente mis conocimientos en el ecosistema de JavaScript**. He pasado de tener conocimientos básicos de Node.js a ser capaz de construir APIs REST completas con arquitecturas profesionales.

Lo que más valoro de este aprendizaje es:

- **La progresión gradual**: Desde los conceptos más básicos hasta arquitecturas complejas
- **El enfoque práctico**: Cada clase incluye ejercicios reales que refuerzan el aprendizaje
- **Las mejores prácticas**: Aprender no solo a hacer que funcione, sino a hacerlo bien
- **La base sólida**: Los fundamentos aprendidos son aplicables a cualquier proyecto con Node.js

Este repositorio representa mi camino de aprendizaje y sirve como referencia para futuros proyectos. Los conceptos y patrones aprendidos aquí son la base para desarrollar aplicaciones backend modernas y escalables con JavaScript/Node.js.

## 🎓 Créditos

- **Instructor**: [midudev](https://midu.dev) - Miguel Ángel Durán
- **Curso**: [Node.js desde cero](https://www.youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7)

## 📝 Licencia

ISC

---

⭐ Si este repositorio te ha sido útil, no olvides darle una estrella y compartirlo con otros desarrolladores que estén aprendiendo Node.js