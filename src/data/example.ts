export const Dat = {
  HTML: {
    BasicStructure:{
      title:`Estructura Básica de una Página HTML`,
      description:`Todo documento HTML sigue una estructura básica que incluye una declaración de tipo de documento, elementos de cabecera (head) y cuerpo (body).`,
    },
    form:{
      title:`Formularios`,
      description:`Utiliza la etiqueta <code>&lt;form&gt;</code> para crear formularios interactivos:`
    },
    Img:{
      title:`Imágenes`,
      description:`Agrega imágenes a tu página con la etiqueta <code>&lt;img&gt;</code>:`
    },
    Lists:{
      title:`Listas`,
      description:`Puedes utilizar listas ordenadas y no ordenadas para organizar información:`
    },
    TextTags:{
      title:`Etiquetas de Texto`,
      description:`HTML ofrece una variedad de etiquetas para dar formato y estructura al texto en tus páginas web.`
    },
    content: {
      example1: {
        BasicStructure: `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página HTML</title>
</head>
<body>
    <h1>Bienvenidos a mi página web</h1>
    <p>Este es un ejemplo de una página HTML básica.</p>
</body>
</html>
`,
        form: `
<form action="/submit" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required>
    <input type="submit" value="Enviar">
</form>
`,
        Img:`<img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen">`,
        Lists:`
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ul>

<ol>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ol>
`,
        TextTags:`
<h1>Encabezado 1</h1>
<p>Este es un párrafo de texto. Puedes usar <em>énfasis</em> y <strong>fuerza</strong> para resaltar palabras.</p>
<hr>
<blockquote>
    Este es un texto dentro de una cita en bloque. Es útil para largas citas de texto.
</blockquote>
`
      },
      example2: {},
      example3: {},
    },
  },
  CSS: {
    BoxModel:{
      title:`Modelo de Caja (Box Model)`,
      description:`El modelo de caja de CSS describe el diseño de los elementos como cajas con propiedades de margen, borde, padding y contenido.`
    },
    CssSelectorProperty:{
      title:`Selectores y Propiedades de CSS`,
      description:`CSS utiliza selectores para aplicar estilos a los elementos HTML.`
    },
    Flexbox:{
      title:`Modelo Flexible (Flexbox)`,
      description:`Flexbox es un modelo de diseño unidimensional que facilita la distribución de espacio entre los elementos y su alineación en una interfaz gráfica.`
    },
    content: {
      example1: {
        BoxModel: `
.caja {
    width: 200px;
    height: 100px;
    padding: 10px;
    border: 2px solid #333;
    margin: 20px;
}`,
        CssSelectorProperty: `
.mi-elemento {
    background-color: #f0f0f0;
}`,
        Flexbox: `
.contenedor-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}`
      },
      example2: {},
      example3: {},
    },
  },
  JS: {
    Arrays:{
      title:`Arreglos (Arrays)`,
      description:`Los arreglos son listas de elementos que se pueden almacenar en una sola variable.`
    },
    Functions:{
      title:`Funciones`,
      description:`Las funciones son bloques de código que realizan una tarea específica y pueden ser reutilizados.`
    },
    Variables:{
      title:`Variables`,
      description:`Las variables son contenedores para almacenar datos.`
    },
    Objects:{
      title:`Objetos`,
      description:`Los objetos son colecciones de propiedades y métodos.`
    },
    content: {
      example1: {
        JsArrays: `
let colores = ["rojo", "verde", "azul"];
let primerColor = colores[0];
`,
        JsFunctions: `
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

let resultado = saludar("Miguel");
`,
        JsVariables: `
var nombre = "Juan";
let edad = 25;
const PI = 3.14;
`,
        JsObjects: `
let persona = {
    nombre: "Ana",
    edad: 30,
    saludar: function() {
        return "Hola, soy " + this.nombre + ".";
    }
};`
      },
      example2: {},
      example3: {},
    },
  },
  TS: {
    Basics:{
      title:`Conceptos Básicos`,
      description:`TypeScript es un superset de JavaScript que añade tipos estáticos.`
    },
    Interfaces:{
      title:`Interfaces`,
      description:`Las interfaces definen contratos dentro de tu código.`
    },
    Generics:{
      title:`Genéricos`,
      description:`Los genéricos proporcionan una manera de crear componentes que funcionan con una variedad de tipos.`
    },
    content: {
      example1: {
        Basics: `
let mensaje: string = "Hola Mundo";
console.log(mensaje);
`,
        Interfaces: `
interface Persona {
    nombre: string;
    edad: number;
}

let persona: Persona = {
    nombre: "Juan",
    edad: 30
};
`,
        Generics: `
function identidad<T>(arg: T): T {
    return arg;
}

let salida = identidad<string>("Hola Mundo");
`
      },
      example2: {},
      example3: {},
    },
  },
  PYTHON: {
    Basics:{
      title:`Conceptos Básicos`,
      description:`Python es un lenguaje de programación interpretado y de alto nivel.`
    },
    Functions:{
      title:`Funciones`,
      description:`Las funciones son bloques de código que realizan una tarea específica.`
    },
    Classes:{
      title:`Clases y Objetos`,
      description:`Python es un lenguaje orientado a objetos, lo que permite la creación de clases y objetos.`
    },
    content: {
      example1: {
        Basics: `
print("Hola Mundo")
`,
        Functions: `
def saludar(nombre):
    return f"Hola, {nombre}!"

resultado = saludar("Miguel")
print(resultado)
`,
        Classes: `
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años."

persona = Persona("Ana", 30)
print(persona.saludar())
`
      },
      example2: {},
      example3: {},
    },
  },
};
