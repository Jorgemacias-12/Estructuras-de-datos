import { Link, PageContent, RedSocial } from "@/types";

export const Trabajos: Link[] = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Producto 1",
    url: "/producto-1",
  },
  {
    title: "Producto 2",
    url: "/producto-2",
  },
  {
    title: "Producto 3",
    url: "",
  },
  {
    title: "Producto 4",
    url: "",
  },
  {
    title: "Proyecto final",
    url: "",
  },

  // "Producto 1",
  // "Producto 2",
  // "Producto 3",
  // "Producto 4",
  // "Proyecto Final",
];

export const producto_1_contenido: PageContent[] = [
  {
    title: "¿Qué es una estructura de dato?",
    content:
      "Son un modo de representar información en una computadora, que cuentan con un comportamiento interno, este mismo se rige por determinadas reglas/restricciones que han sido dadas por la forma en que está construida internamente.",
    image: "",
  },
  {
    title: "¿Qué es un contenedor?",
    content:
      "Es un objeto en el cual pueden guardarse otros objetos (arreglos listas, colas, etc).",
    image: "/images/contenedor.png",
  },
  {
    title: "Tipos de estructuras de datos",
    content: "Existen dos tipos de estructuras de datos y son las siguientes:",
    image: "",
  },
];

export const producto_1_tipos: PageContent[] = [
  {
    title: "Estáticas",
    content:
      "son aquellas en las que el tamaño ocupado es definido en memoria antes de que el programa es ejecutado, este no puede modificarse durante la ejecución del programa.",
    image: "",
  },
  {
    title: "Dinámicas",
    content:
      "en este tipo el tamaño ocupado en memoria puede ser modificado durante la ejecución del programa.",
    image: "",
  },
];

export const producto_1_data_structures: PageContent[] = [
  {
    title: "Arreglo",
    content:
      "son una estructura que almacena los datos un elemento al lado del otro, de tamaño fijo y no puede guardar datos de diferentes tipos, es decir no puedo guardar valores numéricos y booleanos al mismo tiempo.",
    image: "/images/array.jpg",
  },
  {
    title: "Lista enlazada",
    content:
      "Similar a los arrays con la diferencia de que por defecto no tenemos por qué saber la cantidad de lementos que va a contener.",
    image: "/images/linkedList.jpg",
  },
  {
    title: "Pila",
    content:
      "Tipo de listas que tienen la particularidad de sólo poder eliminar o insertar en la cima de las mismas.",
    image: "/images/pila.png",
  },
  {
    title: "Cola",
    content:
      "Tipo de lista que nos permite emular el comportamiento de una fila o cola en la vida real donde el primer elemento en ingresar es el primero en salir",
    image: "/images/cola.svg",
  },
  {
    title: "Arbol binario",
    content:
      "se componen de un nodo, donde cada uno contiene un ítem o un valor, una referencia a un nodo que será el hijo izquierdo y otra referencia para el nodo derecho.",
    image: "/images/arbolBinario.png",
  },
  {
    title: "Grafo",
    content:
      "Tipo no lineal de estructura matemática formada por un conjunto de puntos, y de líneas, cada una de las cuales une un punto a otro.",
    image: "/images/grafo.png",
  },
];

export const producto_1_operations: PageContent[] = [
  {
    title: "Operaciones con estructuras de datos",
    content: "",
    image: "",
  },
  {
    title: "Recorrido",
    content:
      "Implica el acceder a cada registro una única vez, aunque uno o más ítems del registro sean procesados. (Este acceso o procesamiento también se denomina a veces por el término «visitar» el registro).",
    image: "",
  },
  {
    title: "Búsqueda",
    content:
      "Implica la localización de un registro caracterizado por una determinada clave o también el acceso a todos los registros que cumplan una o más condiciones.",
    image: "",
  },
  {
    title: "Insersión",
    content: "Cuando añadimos nuevos registros a la estructura.",
    image: "",
  },
  {
    title: "Eliminación",
    content: "Operación de borrado de un registro de la estructura.",
    image: "",
  },
  {
    title: "Ordenación",
    content:
      "Es la operación de clasificar los registros conforme a un orden lógico determinado (por ejemplo, alfabéticamente, de acuerdo con una clave de nombre, o numérica, de acuerdo con alguna clave de número).",
    image: "",
  },
];

export const producto_1_referencias = [
  {
    title: "Contenedores.",
    content:
      "(2018, 8 enero). [PDF] Contenedores - Free Download PDF. Recuperado 16 de enero de 2023, de",
    link: "https://nanopdf.com/download/contenedores_pdf",
  },
  {
    title: "EcuRed.",
    content:
      "(2022, 13 septiembre). Estructura de datos - EcuRed. Recuperado 17 de enero de 2023, de",
    link: "https://www.ecured.cu/Estructura_de_datos",
  },
  {
    title: "Garcia Serna, A.",
    content:
      "(2018). ¿Qué son las estructuras de datos? EDteam. Recuperado 16 de enero de 2023, de ",
    link: "https://ed.team/blog/estructuras-de-datos",
  },
  {
    title: "Henry, R.",
    content: "Recuperado 16 de enero de 2023, de",
    link: "https://blog.soyhenry.com/que-es-una-estructura-de-datos-en-programacion/",
  },
];

export const producto_2_operations = [
  "Inserción",
  "Recorrido",
  "Búsqueda",
  "Eliminación",
  "Ordenación",
  "Mezcla",
];

export const RedesSociales: RedSocial[] = [
  {
    name: "GitHub",
    iconClass: "fa-brands fa-github",
    url: "https://github.com/Jorgemacias-12",
  },
  {
    name: "Linkedin",
    iconClass: "fa-brands fa-linkedin",
    url: "https://www.linkedin.com/in/JAMZ3",
  },
  {
    name: "Spotify",
    iconClass: "fa-brands fa-spotify",
    url: "https://open.spotify.com/user/1w8d4yxalyjgitha2a12x13dk?si=832733d904094d5c",
  },
];
