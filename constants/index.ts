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
    url: "",
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
    image: "",
  },
  {
    title: "Lista enlazada",
    content:
      "Similar a los arrays con la diferencia de que por defecto no tenemos por qué saber la cantidad de lementos que va a contener.",
    image: "",
  },
  {
    title: "Pila",
    content:
      "Tipo de listas que tienen la particularidad de sólo poder eliminar o insertar en la cima de las mismas.",
    image: "",
  },
  {
    title: "Cola",
    content:
      "Tipo de lista que nos permite emular el comportamiento de una fila o cola en la vida real donde el primer elemento en ingresar es el primero en salir",
    image: "",
  },
  {
    title: "Arbol binario",
    content:
      "se componen de un nodo, donde cada uno contiene un ítem o un valor, una referencia a un nodo que será el hijo izquierdo y otra referencia para el nodo derecho.",
    image: "",
  },
  {
    title: "Grafo",
    content:
      "Tipo no lineal de estructura matemática formada por un conjunto de puntos, y de líneas, cada una de las cuales une un punto a otro.",
    image: "",
  },
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
