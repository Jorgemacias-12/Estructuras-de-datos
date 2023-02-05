import { Link, PageContent, RedSocial } from "@/types";

export const UA2_workList = [
  {
    title: "Lista",
    link: "#lista"
  },
  {
    title: "Pila",
    link: "#pila"
  },
  {
    title: "Cola",
    link: "#cola"
  },
]

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
    title: "UA2-TDA ESTÁTICAS",
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

export const producto_2_pila_operations = [
  {
    title: "Inserción",
    content: [
      "La operación consta en utilizar dos pilas con nombres <kbd>DinerEnCuenta</kbd> y <kbd>DineroEnCartera</kbd> al usuario se le muestra el dinero disponible en las dos pilas.",
      "Cuenta con validaciones en caso de no encontrar una cantidad dada o dar como un numero no válido o string.",
      "Para el proceso de inserción hago una pregunta al usuario de cuanto quiere depositar al banco, para posteriormente utilizando un <kbd>for in </kbd> recorrer cada elemento dispónible en la pila, y con la logica de <kbd>if item == cantidad a depositar</kbd> si esta condición se cumple se utiliza el método <kbd>remove</kbd> para remover el dinero de la pila <kbd>DineroEnCartera</kbd> e insertarlo con append en <kbd>DineroEnCuenta</kbd>.",
    ],
    code: `import os
import random

Ejecucion = True
Opcion = None

DineroEnCuenta = [500, 200, 12, 44, 234]
DineroEnCartera = [200, 100, 50, 20, 15, 30]

def insertar():

    global DineroEnCuenta
    global DineroEnCartera

    clear()

    print("Fondos disponibles: ")
    print(DineroEnCuenta)

    print()

    print("Toco depositar dinero al banco")
    print(
        f"Tengo {DineroEnCartera} en billetes y monedas en mi cartera disponibles para depositar")

    print()

    if not DineroEnCartera:
        print("Ya no tengo dinero, toco ir a a trabajar")
        print("Regresando al menú!")
        pausa()
        menu()

    try:
        canitdadADepositar = int(input("Cantidad a depositar ==> "))
    except:
        pausa()
        insertar()

    if not canitdadADepositar in DineroEnCartera:
        print("No tengo esa cantidad de dinero para depositarla, toco trabajar!")
        pausa()
        insertar()

    for item in DineroEnCartera:

        if item == canitdadADepositar:
            DineroEnCartera.remove(item)
            DineroEnCuenta.append(item)

    print()

    print(f"He depositado {canitdadADepositar} a mi cuenta de banco")

    print()

    print(f"saldo actual {DineroEnCuenta}")
    print(f"dinero en mi cartera: {DineroEnCartera}")

    pausa()
    menu()

    pass

`,
  },
  {
    title: "Recorrido",
    content: [
      "Para implementar el recorrido fue sencillo, solo escogi que pila queria recorrer en este caso <kbd>DineroEnCartera</kbd>.",
      "En el cual mediante un bucle <kbd>while</kbd> para que se ejecute hasta que la pila este vacia, utilice el método <kbd>pop</kbd>.",
      "Esto con la finalidad de sacar el último elemento de la pila, luego para no perder esta información guarde el <kbd>dinero</kbd> en una pila auxiliar, para después imprimir el dinero al usuario junto con el total de dinero en la cartera.",
    ],
    code: `def recorrer():

    clear()

    global DineroEnCartera

    print("¿Cuánto dinero tengo en la cartera?")

    suma = 0

    AuxPila =[]

    while DineroEnCartera:

        dinero = DineroEnCartera.pop()

        AuxPila.append(dinero)

        print(f"Cantidad: {dinero}")
        suma += dinero

    if not DineroEnCartera:
     DineroEnCartera = AuxPila

    print()

    print(f"Dinero total: \${suma} pesos")

    pausa()

    pass
`,
  },
  {
    title: "Búsqueda",
    content: [
      "Para la busqueda se utilizo el for de enumeración, para enumerar y obtener el elemento además del índice de la pila <kbd>DineroEnCuenta</kbd>.",
      "El criterio utilizado para buscar la cantidad de dinero fue preguntar al usuario previamente antes mostrandole que dinero habia disponible.",
      "Una vez hecho esto el programa hace una comprobación lógica como: <kbd>if dinero == cantidadABuscar</kbd> esto dentro del bucle de enumeración, por lo que si esta se cumple, muestro al usuario la información de la cantidad.",
      "",
    ],
    code: `def busqueda():

    clear()

    print("Buscar una canitdad de dinero en cuenta bancaria")

    print()

    print(f"Dinero en cuenta: {DineroEnCuenta}")

    cantidadABuscar = int(input("Cantidad a buscar ==> "))

    encontrado = False

    print()

    for i, dinero in enumerate(DineroEnCuenta):

        if dinero == cantidadABuscar:

            print()

            print(
                f"La cantidad {cantidadABuscar} existe en la posición {i} de la cuenta bancaria")

            encontrado = True

    if not encontrado:
        print(f"La cantidad {cantidadABuscar} no esta en la cuenta bancaria")

    pausa()
    menu()

    pass`,
  },
  {
    title: "Eliminación",
    content: [
      'El proceso de eliminación, concebido como retirar dinero del banco, como plantamiento es sacar de la pila o "Eliminar" el dinero deseado introducido por el usuario, por lo qué obviando el uso de <kbd>input()</kbd> se hizo lo siguiente:',
      "Declaramos una pila auxiliar, se valida calidad de datos o si la cuenta de banco tiene suficientes fondos, si todo esto no se cumple se sigue con lo siguiente:",
      "Para eliminar o hacer la transacción de retiro de efectivo utilice un <kbd>for in</kbd> utilizando las variables <kbd>DineroEnCuenta</kbd> que es la pila de la cual eliminaremos, para insertar la cantidad en la Cartera la cantidad retirada nuevamente con el método <kbd>append()</kbd>.",
    ],
    code: `def eliminar():

    global DineroEnCuenta
    global DineroEnCartera

    clear()

    print("Fondos disponibles en la cuenta")

    print(DineroEnCuenta)

    print()

    print("Introduce una cantidad a retirar")

    try:
        cantidadARetirar = int(input(" ==> "))
    except:
        clear()
        eliminar()

    if not cantidadARetirar in DineroEnCuenta:
        print("La cuenta no tiene saldo suficiente :C")
        insertar()  # Te envia a insertar dinero en la cuenta

    # Fila auxiliar
    DineroEncuentaAux = []

    # Depositar dinero en la cuenta bancaria
    for dinero in DineroEnCuenta:

        if dinero == cantidadARetirar:
            DineroEnCartera.append(dinero)

        if dinero != cantidadARetirar:
            DineroEncuentaAux.append(dinero)

    DineroEnCuenta = DineroEncuentaAux

    print(f"Nuevo saldo {DineroEnCuenta} en la cuenta")

    print()

    print(f"Ahora en mi cartera tengo {DineroEnCartera}")

    pausa()

    pass
`,
  },
  {
    title: "Ordenación",
    content: [
      "Para ordenar la pila por la cantidad menor a mayor, utilice el método <kbd>sort</kbd> disponible en cada pila, en este caso ordene de mayor a menor la pila con nombre <kbd>DineroEnCartera.</kbd>",
    ],
    code: `def ordenar():

    clear()

    print("Ordenar dinero en la cartera por cantidad")

    print()

    print(f"Dinero en mi cartera sin ordenar {DineroEnCartera}")

    print()
    DineroEnCartera.sort()

    print(f"Dinero en mi cartera ordenado {DineroEnCartera}")

    pausa()

    pass`,
  },
  {
    title: "Mezcla",
    content: [
      "Por último, para mezclar (desordenar) el dinero dentro de la cartera del usuario, utice el método <kbd>shuffle</kbd> del paquete <kbd>random</kbd> de python.",
      "El cual en cada ejecución desordenaba la posicion que el dinero tomaba.",
    ],
    code: `def mezclar():

    clear()

    print("Mezclar dinero de mi cartera")

    print()

    print(f"Dinero en mi cartera sin mezclar: {DineroEnCartera}")

    print()
    random.shuffle(DineroEnCartera)

    print(f"Dinero en mi cartera mezclado: {DineroEnCartera}")

    pausa()

    pass
`,
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
// "Para insertar un elemento dentro de una lista, lo primero que necesitamos es una lista, por lo que, observando el editor de código  debajo de este texto, en la línea 8, podemos observar una lista definida de nombre <kbd>shopping_list</kbd>. Para posteriormente en la función insertar preguntar al usuario que producto desea incluir en su lista, luego insertar ese producto a la lista utilizando el metodo"
export const producto_2_operations = [
  {
    title: "Inserción",
    content: [
      "Para insertar un elemento dentro de una lista, lo primero que necesitamos es una lista, por lo que, observando el editor de código  debajo de este texto, en la línea 8, podemos observar una lista definida de nombre <kbd>shopping_list</kbd>.",
      "Para posteriormente en la función insertar preguntar al usuario que producto desea incluir en su lista, luego insertar ese producto a la lista utilizando el metodo <kbd>append</kbd>.",
      "Por último se muestra la lista de compras al usuario (en mi caso la lista ya se encuentra llena, por lo que, habrá más contenido que el que se inserto.",
    ],
    code: `from colorama import init, Fore, Back
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

    pass`,
  },
  {
    title: "Recorrido",
    content: [
      "Para la funcionalidad de recorrido, utilice un blucle for donde obtuve el valor y el índice de este dentro de la lista, podemos observarlo en la línea <kbd>18</kbd> del código en el editor.",
      "Por ejemplo el programa dice lo siguiente: <kbd>El producto {aquí va el producto}</kbd> se encuentra en la posición <kbd>{aquí va la posición}</kbd> de la lista.",
      "Ahora con algo más real sería: <kbd>El producto Pasta de dientes se encuentra en la posición 12 de la lista.</kbd>",
    ],
    code: `from colorama import init, Fore, Back
import time
import os
import random

# Planteamiento lista de compra del supermercado

shopping_list = ["leche", "pan", "frutas", "verduras", "huevos", "carne", "pescado", "galletas", "pasta", "arroz", "jabon", "shampoo",
                 "jabon de afeitar", "cepillo de dientes", "papel higienico", "alcohol en gel", "desinfectante", "detergente", "pañales", "shampoo para bebe"]

def recorrer():

    print()

    print(Fore.YELLOW + "Mostrar lista de compras")

    # Imprimir la lista de compras
    for index, value in enumerate(shopping_list):

        print(
            Fore.GREEN + f"El producto {value.capitalize()} se encuentra en la posición {index} de la lista")

    pass`,
  },
  {
    title: "Búsqueda",
    content: [
      "Para este caso en particular, hay existen dos opciones de búsqueda, por índice y por valor, en mi caso implemente la búsqueda por valor debido a que utilizo strings.",
      "Nuevamente el programa pregunta al usuario por un producto a buscar dentro de su lista de compras.",
      "Aquí existen dos vertientes, si encuentra el producto el resultado es: <kbd>El producto {producto} existe en la lista con índice {indice}.</kbd>",
      "Que ya con un ejemplo real es: <kbd>El producto Pollo existe en el índice 4 de la lista.</kbd>",
    ],
    code: `def buscar():

    print()

    productoABuscar = input(Fore.YELLOW + "Producto a buscar: ").lower()

    if (productoABuscar in shopping_list):

        print(
            Fore.CYAN + f"El producto {productoABuscar} existe en la lista de compra con indice {shopping_list.index(productoABuscar)}")

    else:

        print(Fore.RED + "El producto no esta dentro de tu lista de compras :C")

    pass`,
  },
  {
    title: "Eliminación",
    content: [
      "El programa muestra primero la lista de compras actual, para luego preguntar al usuario si necesita eliminar un producto.",
      "Después de esto, el programa esperara 5 segundos imprimiendo el caracter <kbd>.</kbd>, y por último se confirmará si se elimino.",
      "De hecho el método <kbd>remove</kbd> permite remover un elemento de la lista por <kbd>valor/índice</kbd> en mi caso valor.",
    ],
    code: `def eliminar():

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

    pass`,
  },
  {
    title: "Ordenación",
    content: [
      "El programa en esta étapa le dice al usuario que la lista se va a ordenar, se ejecuta el método <kbd>sort</kbd> de la lista, en este caso como mi lista contiene valores string se va a ordenar por orden álfabetico.",
      "Por último, solo imprimo los valore ordenados alfabéticamente al usuario con diferentes colores.",
    ],
    code: `def ordenar():

    print()

    print(Fore.LIGHTCYAN_EX + "Ordenar lista de compras por orden alfabetico")

    shopping_list.sort()

    for index, item in enumerate(shopping_list):

        if index % 2 == 0:
            print(Fore.GREEN + f'{item}')
        else:
            print(Fore.BLUE + f'{item}')

    pass`,
  },
  {
    title: "Mezcla",
    content: [
      "Antes de finalizar el programa, este hace una mezcla de la lista de compras del usuario, esta mezcla cambia de indice todos los productos insertados anteriormente.",
      "¿Cómo se hace esto? una forma sencilla de lograr esto es utilizando la funcion <kbd>suffle</kbd> de la libreria <kbd>random</kbd>",
      "¿El resultado? como mencione anteriormente al usuario se le muestra una lista de productos para comprar desordenada.",
    ],
    code: `def mezclar():

    print()

    print(Fore.YELLOW + "Mostrar productos de mi lista de compras aleatoriamente")

    random.shuffle(shopping_list)

    print(Fore.LIGHTGREEN_EX + f'{shopping_list}')

    pass`,
  },
  // "Inserción",
  // "Recorrido",
  // "Búsqueda",
  // "Eliminación",
  // "Ordenación",
  // "Mezcla",
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

export const producto_2_pilas_datos = [
  "Inserción",
  "Recorrido",
  "Búsqueda",
  "Eliminación",
  "Ordenamiento",
  "Mezcla",
];

export const CodeEvidences: PageContent[] = [
  {
    title: "Inserción",
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
    title: "Búsqueda",
    content:
      "Pregunta al usuario el nombre de un objeto para buscarlo en la lista de compras, si encuentra el objeto retornara el indice donde se encuentra este, caso contario emite un mensaje.",
    image: "./images/Busqueda.png",
  },
  {
    title: "Eliminación",
    content:
      "El usuario puede eliminar un elemento de su lista utilizando su nombre, nuevamente si no existe se le hará saber al usuario.",
    image: "./images/Eliminar.png",
  },
  {
    title: "Ordenamiento",
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

export const pila_codeCaptures: PageContent[] = [
  {
    title: "Menú",
    content:
      "Este es el menú del programa donde el usuario interactúa, aquí se utilizando dos pilas para llevar a cabo la transacción.",
    image: "./images/pila/Menu.png",
  },
  {
    title: "Inserción",
    content:
      "Emula una transacción entre una persona depositando dinero físico en una cuenta bancaria.",
    image: "./images/pila/Insercion.png",
  },
  {
    title: "Recorrido",
    content:
      "El programa emula como la persona conta su dinero en la cartera, para posteriormente sumarlo y decir la cantidad total de dinero.",
    image: "./images/pila/Recorrer.png",
  },
  {
    title: "Búsqueda",
    content:
      "El programa simula la acción donde el usuario busca una cantidad de dinero en la cuenta bancaria, si se encuentra, se emite un mensaje donde se confirma su existencia, y en que posicion de la pila o en este caso 'cuenta bancaria'. ",
    image: "./images/pila/Busqueda.png",
  },
  {
    title: "Eliminación",
    content:
      "En esta operación el programa emula que la persona, utilizando su cuenta bancaria puede retirar dinero y comprar cosas, para esto se imprime la pila 'cuenta bancaria', si la cantidad coincide con algún elemento disponible en la cuenta del usuario se procede a continuar la 'transacción', y se muestra el nuevo saldo. ",
    image: "./images/pila/Eliminar.png",
  },
  {
    title: "Ordenamiento",
    content:
      "El programa emula una persona ordenando su dinero por cantidad, primero muestra su cartera con el dinero sin ordenar, para posteriormente ordenarlo y mostrar el resultado.",
    image: "./images/pila/Ordenar.png",
  },
  {
    title: "Mezcla",
    content:
      "Aquí el programa emula nuevamente que la cartera de nuestro usuario se revuelve, y como consecuencia el dinero se desordena, primero se imprime en buen estado para posteriormente mostrarse desordenado o mezclado.",
    image: "./images/pila/Mezcla.png",
  },
];

export const producto_2_referencias = [
  {
    title: "UA2-TDA Estáticas",
    content: "Recuperado 1 de febrero de 2023, de",
    link: "https://sites.google.com/academicos.udg.mx/drlizcano/il354-estructura-datos/ua2-tda-est%C3%A1ticas?authuser=0",
  },
];

export const env = process.env.NODE_ENV;

export const downloadLink = "code/JAMZ-TDA-ListaEstatica.py";
export const pilaDownloadLink = "code/JAMZ-TDA-PilaEstatica.py";

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
