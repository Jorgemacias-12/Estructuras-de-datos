import { Link, PageContent, RedSocial } from "@/types";
import { title } from "process";

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
    image: "./images/contenedor.png",
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
    image: "./images/array.jpg",
  },
  {
    title: "Lista enlazada",
    content:
      "Similar a los arrays con la diferencia de que por defecto no tenemos por qué saber la cantidad de lementos que va a contener.",
    image: "./images/linkedList.jpg",
  },
  {
    title: "Pila",
    content:
      "Tipo de listas que tienen la particularidad de sólo poder eliminar o insertar en la cima de las mismas.",
    image: "./images/pila.png",
  },
  {
    title: "Cola",
    content:
      "Tipo de lista que nos permite emular el comportamiento de una fila o cola en la vida real donde el primer elemento en ingresar es el primero en salir",
    image: "./images/cola.svg",
  },
  {
    title: "Arbol binario",
    content:
      "se componen de un nodo, donde cada uno contiene un ítem o un valor, una referencia a un nodo que será el hijo izquierdo y otra referencia para el nodo derecho.",
    image: "./images/arbolBinario.png",
  },
  {
    title: "Grafo",
    content:
      "Tipo no lineal de estructura matemática formada por un conjunto de puntos, y de líneas, cada una de las cuales une un punto a otro.",
    image: "./images/grafo.png",
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

export const producto_2_codigo = `from colorama import init, Fore, Back
import time
import os
import random

# Planteamiento lista de compra del supermercado

shopping_list = ["leche", "pan", "frutas", "verduras", "huevos", "carne", "pescado", "galletas", "pasta", "arroz", "jabon", "shampoo",
                 "jabon de afeitar", "cepillo de dientes", "papel higienico", "alcohol en gel", "desinfectante", "detergente", "pañales", "shampoo para bebe"]


def insertar():

    # Insertar un producto nuevo a la lista

    print()

    print(Fore.LIGHTRED_EX + "Incluir producto en tu lista de compras")

    print()  # Espacios en blanco para no confundir al usuario

    # Preguntar al usuario el nombre del producto
    producto = input(Fore.GREEN + "Nombre del producto: ").lower()

    # Insertar producto en el arreglo
    shopping_list.append(producto)

    print()

    print(Fore.YELLOW + "Lista del usuario actual ->")

    print()

    print(Fore.LIGHTCYAN_EX + f"{shopping_list}")

    print()

    print()  # Espacio en blanco para añadir espaciado

    print(Fore.RED + f"La nueva lista es: {shopping_list}")

    print()

    print(Fore.LIGHTMAGENTA_EX +
          f"El producto {producto} esta localizado en el indice {shopping_list.index(producto)}")

    pass


def recorrer():

    print()

    print(Fore.YELLOW + "Mostrar lista de compras")

    # Imprimir la lista de compras
    for index, value in enumerate(shopping_list):

        print(
            Fore.GREEN + f"El producto {value.capitalize()} se encuentra en la posición {index} de la lista")

    pass


def buscar():

    print()

    productoABuscar = input(Fore.YELLOW + "Producto a buscar: ").lower()

    if (productoABuscar in shopping_list):

        print(
            Fore.CYAN + f"El producto {productoABuscar} existe en la lista de compra con indice {shopping_list.index(productoABuscar)}")

    else:

        print(Fore.RED + "El producto no esta dentro de tu lista de compras :C")

    pass


def eliminar():

    print()

    productoAEliminar = input(Fore.RED + "Producto a eliminar: ").lower()

    print(Fore.RED + f'Removiendo {productoAEliminar} de tu lista de compras')

    print()

    for i in range(5):
        time.sleep(1)
        print(Back.WHITE + Fore.LIGHTCYAN_EX + f'.', end='')

    print()
    print()

    try:
        shopping_list.remove(productoAEliminar)
    except ValueError:
        print()
        print(Fore.WHITE + Back.RED +
              f"El producto {productoAEliminar} no esta en tu lista de compras")

    print(Fore.YELLOW + f'Lista de compras actualizada: {shopping_list}')

    pass


def ordenar():

    print()

    print(Fore.LIGHTCYAN_EX + "Ordenar lista de compras por orden alfabetico")

    shopping_list.sort()

    for index, item in enumerate(shopping_list):
        
        if index % 2 == 0:
            print(Fore.GREEN + f'{item}')
        else:
            print(Fore.BLUE + f'{item}')

    pass


def mezclar():

    print()

    print(Fore.YELLOW + "Mostrar productos de mi lista de compras aleatoriamente")

    random.shuffle(shopping_list)

    print(Fore.LIGHTGREEN_EX + f'{shopping_list}')

    pass


def main():

    os.system("clear")

    init(autoreset=True, convert=True)

    print(Fore.BLUE + f"¡Bienvenido!")

    insertar()

    recorrer()

    buscar()

    eliminar()

    ordenar()

    mezclar()


if __name__ == '__main__':
    main()
`;

export const CodeEvidences: PageContent[] = [
  {
    title: "Insercion",
    content:
      "El programa pregunta al usuario, que producto desea añadir a su lista de compras.",
    image: "./images/Insercion.png",
  },
  {
    title: "Recorrido",
    content:
      "El programa le muestra al usuario su lista de compras actualizada elemento por elemento.",
    image: "./images/Recorrer.png",
  },
  {
    title: "Busqueda",
    content:
      "Pregunta al usuario el nombre de un objeto para buscarlo en la lista de compras, si encuentra el objeto retornara el indice donde se encuentra este, caso contario emite un mensaje.",
    image: "./images/Busqueda.png",
  },
  {
    title: "Eliminacion",
    content:
      "El usuario puede eliminar un elemento de su lista utilizando su nombre, nuevamente si no existe se le hará saber al usuario.",
    image: "./images/Eliminar.png",
  },
  {
    title: "Ordenacion",
    content:
      "El programa ordena la lista de compras en orden alfabetico para posteriormente mostrar.",
    image: "./images/Ordenar.png",
  },
  {
    title: "Mezcla",
    content:
      "Nuevamente, para mezclar utilizamos la funcion suffle de la libreria random, esta funcion recibe una lista como parámetro, y modifica la lista moviendo los elementos de forma aleatoria, luego el programa muestra la mezcla al usuario.",
    image: "./images/Mezcla.png",
  },
];


export const producto_2_referencias = [
  {
    title: "UA2-TDA Estáticas",
    content: "",
    link: "https://sites.google.com/academicos.udg.mx/drlizcano/il354-estructura-datos/ua2-tda-est%C3%A1ticas?authuser=0",
  },
];

export const env = process.env.NODE_ENV;

export const downloadLink =
  env === "development"
    ? "/code/JAMZ-TDA-ListaEstatica.py"
    : "Estructuras-de-datos/code/JAMZ-TDA-ListaEstatica.py";

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
