function __main__() {
    // onCharge: Carga principalemente funciones para generar los eventos principales del programa junto con algunas funcionalidades.
    // Función secundaria que carga los eventos que requieren de parametros y funciones visuales, entre estos el cronómetro, ocultar y mostrar los distintos formularios, las funciones para insertar datos en la bd.
    onCharge();


    // tablaDeportistas: Genera la tabla de deportistas junto con y los eventos relacionados con esta. Es la función principal.
    // Carga la tabla de Deportista y genera los eventos para añadir o eliminar filas así como las subtablas y las funciones que necesitan estas véase: generar la tabla de pruebas por usuario, los botones de eliminar o añadir , la tabla de marcas... 
    tablaDeportistas();
}

__main__();