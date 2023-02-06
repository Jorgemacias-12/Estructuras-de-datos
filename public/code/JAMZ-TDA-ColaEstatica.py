# Importes
import os
import random
import time
import operator

# sección clases para práctica
class Cliente:
    def __init__(self):
        self.nombre = self.generar_nombre()
        self.tipo_de_cliente = self.generar_tipo_de_cliente()
        self.antiguedad = self.generar_antiguedad()
        self.operacion = self.generar_operacion()

    def __repr__(self) -> str:
        return str(self)

    def __str__(self):

        return f"Nombre: {self.nombre}\nTipo de cliente: {self.tipo_de_cliente}\nAntigüedad: {self.antiguedad}\n"

    def generar_nombre(self):
        nombres = ["Juan", "Pedro", "María", "Jorge", "Ana", "Carlos", "Sofía", "Lucas", "Isabel", "Miguel", "Marta",
                   "David", "Laura", "Jose", "Gabriela", "Ricardo", "Luz", "Eduardo", "Diana", "Fernando", "Carmen",
                   "Santiago", "Adriana", "Hector", "Cristina", "Daniel", "Araceli", "Javier", "Verónica", "Manuel",
                   "Magdalena", "Diego", "Lorena", "Alfonso", "Gloria", "Joaquín", "Alicia", "Mauricio", "Rosa",
                   "Gustavo", "Irene", "Rafael", "Silvia", "Erick", "Esther", "Leonardo", "Marisol", "Emiliano",
                   "Guadalupe"]

        return random.choice(nombres)

    def generar_tipo_de_cliente(self):
        tipos = ["Básico", "Premium", "Platinum"]
        return random.choice(tipos)

    def generar_antiguedad(self):
        return random.randint(1, 20)

    def generar_operacion(self):
        return random.choice(["deposito", "retiro", "transferencia"])

    def generar_clientes(self, tope):

        global Clientes
        global ColaNormal
        global ColaPrioritaria
        global ColaExclusiva

        for i in range(tope):

            cliente = Cliente()

            Clientes.append(cliente)

            if cliente.tipo_de_cliente == "Básico":
                ColaNormal.append(cliente)

            elif cliente.tipo_de_cliente == "Premium":
                ColaPrioritaria.append(cliente)

            elif cliente.tipo_de_cliente == "Platinum":
                ColaExclusiva.append(cliente)

# Variables para almacenar los datos simulados y colas
TopeDeClientes = 0
ColaExclusiva = []
ColaPrioritaria = []
ColaNormal = []
Clientes = []


# Funciones de utileria
def clear():
    if os.name == "nt":
        os.system("cls")
    else:
        os.system("clear")


def pause():
    if os.name == "nt":
        os.system("pause")

# aquí termina


# Funcionalidad de la aplicación
def insertar():

    # global TopeDeCientes

    clear()

    print("+-----------------------+")
    print("|Simulación de inserción|")
    print("+-----------------------+")

    print()

    print("Clientes llegando a colas...")

    # TopeDeCientes = random.randrange(4, 6)

    print(f"Tope de clientes: {TopeDeClientes}")

    print()

    for i in range(TopeDeClientes):

        cliente = Cliente()

        print(f'Cliente No. {i + 1}')
        print(f'Nombre: {cliente.nombre}')
        print(f'Tipo de cliente: {cliente.tipo_de_cliente}')
        print(f'Antigüedad: {cliente.antiguedad} años')

        if cliente.tipo_de_cliente == "Básico":

            print(f"Cliente {cliente.nombre} asignado a cola Básica")

            ColaNormal.append(cliente)
        elif cliente.tipo_de_cliente == "Premium":

            print(f"Cliente {cliente.nombre} asignado a cola prioritaria")

            ColaPrioritaria.append(cliente)

        elif cliente.tipo_de_cliente == "Platinum":
            print(f"Cliente {cliente.nombre} asignado a cola exclusiva")
            ColaExclusiva.append(cliente)

        print()

    pause()

    pass


def recorrer():

    global TopeDeClientes

    clear()

    if not ColaNormal and not ColaExclusiva and not ColaPrioritaria:
        Cliente().generar_clientes(TopeDeClientes)

    print(f"Recorrer clientes")

    print()

    totalClientes = len(ColaNormal) + len(ColaExclusiva) + len(ColaPrioritaria)

    print(f"Tope de clientes: {TopeDeClientes}")

    print()

    print(f"Clientes actuales: {totalClientes}")

    print()

    print("+-------------+")
    print("| Cola normal |")
    print("+-------------+")
    for cliente in ColaNormal:
        print(cliente)

    print()

    print("+------------------+")
    print("| Cola prioritaria |")
    print("+------------------+")
    for cliente in ColaPrioritaria:
        print(cliente)

    print()

    print("+----------------+")
    print("| Cola exclusiva |")
    print("+----------------+")
    for cliente in ColaExclusiva:
        print(cliente)

    print()

    pause()

    pass


def busqueda():

    clear()

    if not ColaNormal and not ColaExclusiva and not ColaPrioritaria:
        Cliente().generar_clientes(TopeDeClientes)

    print("Buscar cliente en cola")

    print("Clientes: ")

    print([cliente for cliente in ColaNormal])
    print([cliente for cliente in ColaPrioritaria])
    print([cliente for cliente in ColaExclusiva])

    print()

    clienteABuscar = input("Cliente a buscar ==> ")

    Encontrado = False

    print()

    for i, cliente in enumerate(ColaNormal):

        if clienteABuscar == cliente.nombre:
            Encontrado = True

            print(
                f"El cliente {cliente.nombre} tiene el turno {i} en la cola normal")

    for i, cliente in enumerate(ColaPrioritaria):

        if clienteABuscar == cliente.nombre:
            Encontrado = True

            print(
                f"El cliente {cliente.nombre} tiene el turno {i} en la cola prioritaria")

    for i, cliente in enumerate(ColaExclusiva):

        if clienteABuscar == cliente.nombre:
            Encontrado = True

            print(
                f"El cliente {cliente.nombre} tiene el turno {i} en la cola exclusiva")

    if not Encontrado:
        print("El cliente que busca no se encuentra en ninguna cola")

    pause()

    pass


def eliminar():

    clear()

    if not ColaNormal and not ColaExclusiva and not ColaPrioritaria:
        Cliente().generar_clientes(TopeDeClientes)

    print("Atendiendo a los clientes \n")

    for cliente in ColaExclusiva:
        print(f"Nombre: {cliente.nombre}")
        print(f"Operación: {cliente.operacion}")
        print(f"Priorioridad: {cliente.tipo_de_cliente}")
        print("\n")

    for cliente in ColaPrioritaria:
        time.sleep(2)
        print(f"Nombre: {cliente.nombre}")
        print(f"Operación: {cliente.operacion}")
        print(f"Priorioridad: {cliente.tipo_de_cliente}")
        print("\n")

    for cliente in ColaNormal:
        time.sleep(4)
        print(f"Nombre: {cliente.nombre}")
        print(f"Operación: {cliente.operacion}")
        print(f"Priorioridad: {cliente.tipo_de_cliente}")
        print("\n")

    print("¡Todos los clientes han sido atendidos!")

    print()

    pause()

    pass


def ordenar():

    clear()

    if not ColaNormal and not ColaExclusiva and not ColaPrioritaria:
        Cliente().generar_clientes(TopeDeClientes)

    print("Ordenar cola de clientes por orden alfabetico")

    print()

    print(f"Cola de clientes: \n\n{Clientes} (sin prioridades)")

    Clientes.sort(key=operator.attrgetter("nombre"))

    print()

    print(f"Los clientes han sido acomodados según su nombre (de forma alfabetica)")

    print()

    print(f"Cola de clientes: {Clientes}")

    pause()

    pass


def mezclar():

    clear()

    if not ColaNormal and not ColaExclusiva and not ColaPrioritaria:
        Cliente().generar_clientes(TopeDeClientes)

    print("Hoy hay sospecha de robo emitida por la policia")
    print("Mezclaremos la cola de clientes para indentificar ")
    print("a alguien sospechoso.")

    print()

    print(f"Cola de clientes: \n\n{Clientes}")

    print("\nCombinando cola\n")

    for i in range(5):
        time.sleep(1)
        print(".", end=" ")

    random.shuffle(Clientes)

    print("\n")

    print(f"Nueva cola de clientes: \n\n{Clientes}")

    pause()

    pass


def menu():

    clear()

    # Generar tope de clientes aquí
    global TopeDeClientes

    TopeDeClientes = random.randrange(4, 6)

    print("+---------------------------------------------------+")
    print("|      Simulación de una cola del supermercado      |")
    print("+---------------------------------------------------+")
    print("| 1.- Inserción                                     |")
    print("| 2.- Recorrido                                     |")
    print("| 3.- Búsqueda                                      |")
    print("| 4.- Eliminación                                   |")
    print("| 5.- Ordenamiento                                  |")
    print("| 6.- Mezcla                                        |")
    print("| 7.- Salir                                         |")
    print("+---------------------------------------------------+")

    try:
        Opcion = int(input(" ==> "))
    except ValueError:
        pause()
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
        clear()
        exit()
    else:
        menu()

    pass


def main():

    menu()

    pass


if __name__ == "__main__":
    main()