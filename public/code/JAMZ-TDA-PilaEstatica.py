import os

Ejecucion = True
Opcion = None

DineroEnCartera = [500, 200, 12, 44, 234]
DineroEnCuenta = [10]

def clear():

    if os.name == "nt":
        os.system("cls")
    else:
        os.system("clear")

def pausa():
    if os.name == "nt":
        os.system("pause")


def insertar():

    print("Hola desde mi casa")

    pass


def recorrer():
    pass


def busqueda():
    pass


def eliminar():
    pass


def ordenar():
    pass


def mezclar():
    pass


def menu():

    os.system("clear")

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
