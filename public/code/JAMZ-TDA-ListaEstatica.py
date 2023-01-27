from colorama import init, Fore, Back
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
