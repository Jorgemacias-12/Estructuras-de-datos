import os
import random

Ejecucion = True
Opcion = None

DineroEnCuenta = [500, 200, 12, 44, 234]
DineroEnCartera = [200, 100, 50, 20, 15, 30]


def clear():

    if os.name == "nt":
        os.system("cls")
    else:
        os.system("clear")


def pausa():
    if os.name == "nt":
        os.system("pause")


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


def recorrer():

    print("Mostrando saldo actual total de la cuenta")

    suma = 0

    while DineroEnCuenta:

        dinero = DineroEnCuenta.pop()
        print(f"Cantidad: {dinero}")
        suma += dinero

    print()

    print(f"Dinero total: ${suma} pesos")

    pausa()

    pass


def busqueda():

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

    pass


def eliminar():

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


def ordenar():

    clear()

    print("Ordenar dinero en la cartera por cantidad")

    print()

    print(f"Dinero en mi cartera sin ordenar {DineroEnCartera}")

    print()
    DineroEnCartera.sort()

    print(f"Dinero en mi cartera ordenado {DineroEnCartera}")

    pausa()

    pass


def mezclar():

    clear()

    print("Mezclar dinero de mi cartera")

    print()

    print(f"Dinero en mi cartera sin mezclar: {DineroEnCartera}")

    print()
    random.shuffle(DineroEnCartera)

    print(f"Dinero en mi cartera mezclado: {DineroEnCartera}")

    pausa()

    pass


def menu():

    os.system("clear")

    print("#####################################################")
    print("#            Movimientos entre dinero               #")
    print("#               y cuenta bancaria                   #")
    print("###################### MENU #########################")
    print("# 1.- Inserción                                     #")
    print("# 2.- Recorrido                                     #")
    print("# 3.- Búsqueda                                      #")
    print("# 4.- Eliminación                                   #")
    print("# 5.- Ordenamiento                                  #")
    print("# 6.- Mezcla                                        #")
    print("# 7.- Salir                                         #")
    print("#####################################################")

    try:
        Opcion = int(input(" ==> "))
    except ValueError:
        pausa()
        menu()

    if Opcion == 1:
        insertar()
        menu()
        pass
    if Opcion == 2:
        recorrer()
        menu()
        pass
    if Opcion == 3:
        busqueda()
        menu()
        pass
    if Opcion == 4:
        eliminar()
        menu()
        pass
    if Opcion == 5:
        ordenar()
        menu()
        pass
    if Opcion == 6:
        mezclar()
        menu()
        pass
    if Opcion == 7:
        exit()
    else:
        pausa()
        menu()


def main():

    menu()


if __name__ == "__main__":
    main()
