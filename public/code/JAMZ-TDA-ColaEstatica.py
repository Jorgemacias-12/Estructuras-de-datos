# Importes
import os
import random
import operator
import time
from time import perf_counter

# Decorador de tiempo


def time_decorator(function):

    def wrapper(*args, **kwargs):
        t1 = perf_counter()

        result = function(*args, **kwargs)

        end = perf_counter() - t1

        end = "{:.6f}".format(end)

        return result, end

    return wrapper


# sección algoritmos de ordenamiento y búsqueda

@time_decorator
def busqueda_lineal(lista_de_clientes, nombre_cliente):
    coincidencias = []

    if len(lista_de_clientes) == 0:
        return "Lista vacia"

    for cliente in lista_de_clientes:

        if cliente.nombre == nombre_cliente:

            coincidencias.append(cliente)

    return coincidencias


@time_decorator
def busqueda_binaria(lista_de_clientes, nombre):
    """
        Devuelve una lista de todos los clientes en la lista de clientes que tienen elmismo nombre que el nombre buscado.
        Si no se encuentra ninguna coincidencia, devuelve una lista vacía.
        Si hay múltiples clientes con el mismo nombre, se devuelve una lista de todos ellos.
    """
    coincidencias = []

    lista_de_clientes_ordenada = sorted(
        lista_de_clientes, key=lambda x: x.nombre)

    low = 0
    high = len(lista_de_clientes_ordenada) - 1

    while low <= high:

        mid = (low + high) // 2

        # Normalizar las cadenas antes de compararlas para hacerlas sensibles a mayúsculas y minúsculas
        if lista_de_clientes_ordenada[mid].nombre.lower() == nombre.lower():
            coincidencias.append(lista_de_clientes_ordenada[mid])

            # Avanzar hacia la izquierda y hacia la derecha para buscar otros clientes con el mismo nombre
            left = mid - 1
            right = mid + 1
            while left >= 0 and lista_de_clientes_ordenada[left].nombre.lower() == nombre.lower():
                coincidencias.append(lista_de_clientes_ordenada[left])
                left -= 1
            while right < len(lista_de_clientes_ordenada) and lista_de_clientes_ordenada[right].nombre.lower() == nombre.lower():
                coincidencias.append(lista_de_clientes_ordenada[right])
                right += 1

            return coincidencias

        elif lista_de_clientes_ordenada[mid].nombre.lower() < nombre.lower():
            low = mid + 1
        else:
            high = mid - 1

    return "El parámetro de búsqueda no funciona"


@time_decorator
def ordenamiento_por_seleccion(lista):
    def comparador(a, b): return a < b

    # Para cada posición en la lista
    for i in range(len(lista)):

        # Buscar el índice del elemento más pequeño en la sublista que
        # comienza en i
        min_index = i

        for j in range(i+1, len(lista)):

            # Utilizar la función de comparación peronalizada
            # para comparar los elementos
            if comparador(lista[j], lista[min_index]):
                min_index = j
        lista[i], lista[min_index] = lista[min_index], lista[i]

    return lista

# sección de métodos para la UA3


def lineal():

    global Clientes

    print()

    print("##### Búsqueda lineal #####")

    print("Introduzca el nombre del cliente a búscar")

    try:
        nombre = input("==> ")
    except ValueError:
        print("El cliente no existe")

    resultados, time = busqueda_lineal(Clientes, nombre)

    if len(resultados) == 0:
        print(f"Ningun cliente tiene el nombre {nombre}")
        pause()
        lineal()

    print()

    print(f"Coincidencias: {resultados}")

    print()

    print(f"El algoritmo lineal ha tardado {time} segundos")

    print()

    pause()


def binaria():

    global Clientes

    print()

    print("##### Búsqueda binaria #####")

    print("Introduzca el nombre del cliente a búscar")

    try:
        nombre = input("==> ")
    except ValueError:
        print("El cliente no existe")

    resultados, time = busqueda_binaria(Clientes, nombre)

    if not resultados:
        print(f"Ningun cliente tiene el nombre {nombre}")
        pause()
        lineal()

    print()

    print(f"Coincidencias: {resultados}")

    print()

    print(f"El algoritmo binario ha tardado {time} segundos")

    print()

    pause()

    pass


def ordenamiento_iterativo():

    global Clientes

    print()

    print("##### Ordenamiento iterativo por selección #####")

    print()

    print("### Clientes sin ordenar ###")

    print()

    print(Clientes)

    print()

    print("### Clientes ordenados ###")

    print()

    Clientes, time = ordenamiento_por_seleccion(Clientes)

    print(Clientes)

    print(
        f"El ordenamiento iterativo por selección ha tardado {time} segundos")

    print()

    pause()

# sección clases para práctica


class Cliente:
    def __init__(self):
        self.nombre = self.generar_nombre()
        self.tipo_de_cliente = self.generar_tipo_de_cliente()
        self.antiguedad = self.generar_antiguedad()
        self.operacion = self.generar_operacion()
        self.id = self.generar_id()

    def __repr__(self) -> str:
        return str(self)

    def __eq__(self, objectToCompare):
        if isinstance(objectToCompare, Cliente):
            return self.nombre == objectToCompare.nombre

        return False

    def __lt__(self, objectToCompare):
        return self.nombre < objectToCompare.nombre
    # def __eq__(self, objectToCompare):

    #     if isinstance(objectToCompare, Cliente):
    #         return self.id == objectToCompare.id

    #     return False

    # def __lt__(self, objectToCompare):
    #     if self.nombre < objectToCompare.nombre:
    #         return True
    #     elif self.nombre > objectToCompare.nombre:
    #         return False

    def __str__(self):

        return f"ID:{self.id}\nNombre: {self.nombre}\nTipo de cliente: {self.tipo_de_cliente}\nAntigüedad: {self.antiguedad}\n"

    def generar_id(self):
        return random.randint(100000, 999999)

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
        return random.randint(1, 200)

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


def metodos_busqueda():

    clear()

    print("+-----------------------------------------------+")
    print("|                                               |")
    print("|          ALGORITMOS DE BÚSQUEDA               |")
    print("|                      Y                        |")
    print("|                 ORDENAMIENTO                  |")
    print("+-----------------------------------------------+")

    print()

    print("+-----------------------------------------------+")
    print("| 0.- Regresar al menú                          |")
    print("| 1.- Búsqueda lineal                           |")
    print("| 2.- Búsqueda binaria                          |")
    print("| 3.- Ordenamiento iterativo por selección      |")
    print("+-----------------------------------------------+")

    if not ColaNormal and not ColaExclusiva and not ColaPrioritaria:
        Cliente().generar_clientes(TopeDeClientes)

    try:
        Opcion = int(input("==> "))
    except:
        pause()
        metodos_busqueda()

    if Opcion == 0:
        menu()

    if Opcion == 1:
        lineal()
        metodos_busqueda()
        pass

    if Opcion == 2:
        binaria()
        metodos_busqueda()
        pass

    if Opcion == 3:
        ordenamiento_iterativo()
        metodos_busqueda()
        pass

    else:
        metodos_busqueda()
    pass


def menu():

    clear()

    # Generar tope de clientes aquí
    global TopeDeClientes

    # preguntar al usuario cuantos clientes va a generar
    if TopeDeClientes == 0:
        try:
            TopeDeClientes = int(input("¿Clientes a generar? ==> "))
        except:
            menu()

    print()

    print("+---------------------------------------------------+")
    print("|      Simulación de una cola del supermercado      |")
    print("+---------------------------------------------------+")
    print("| 1.- Inserción                                     |")
    print("| 2.- Recorrido                                     |")
    print("| 3.- Búsqueda                                      |")
    print("| 4.- Eliminación                                   |")
    print("| 5.- Ordenamiento                                  |")
    print("| 6.- Mezcla                                        |")
    print("| 7.- Métodos de búsqueda                           |")
    print("| 8.- Salir                                         |")
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
        metodos_busqueda()
        menu()
    if Opcion == 8:
        clear()
        os._exit(1)
    else:
        menu()


def main():

    menu()

    pass


if __name__ == "__main__":
    main()
