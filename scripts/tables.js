// tablaDeportistas: Genera la tabla de deportistas.
// Recoge todas las filas de la tabla deportistas en la DB y añade eventos sobre el boton detalles y el botón eliminar.
function tablaDeportistas() {
    $.ajax({
        async: false,
        data: { "nombre_tabla": "deportistas" },
        url: 'php/selectAllDeportistas.php',
        type: 'get',
        success: function (response) {
            if (response != false) {
                // La variable respuesta almacena un array con las filas recogidas de la DB.
                var respuesta = JSON.parse(response);
                for (i = 0; i < respuesta.length; i++) {

                    tr = document.createElement("tr");

                    //ID
                    tdID = document.createElement("td");
                    divID = document.createElement("div");
                    divEtiquetaID = document.createElement("div");
                    divEtiquetaID.innerHTML = "ID"
                    divDatosID = document.createElement("div");
                    divDatosID.classList.add("font-weight-bold");
                    divDatosID.classList.add("mt-1");
                    divDatosID.innerHTML = respuesta[i].idUser;

                    divID.appendChild(divEtiquetaID);
                    divID.appendChild(divDatosID);
                    tdID.appendChild(divID);
                    tr.appendChild(tdID);

                    //Nombre
                    tdNombre = document.createElement("td");
                    divNombre = document.createElement("div");
                    divEtiquetaNombre = document.createElement("div");
                    divEtiquetaNombre.innerHTML = "Nombre:"
                    divDatosNombre = document.createElement("div");
                    divDatosNombre.classList.add("font-weight-bold");
                    divDatosNombre.classList.add("mt-1");
                    divDatosNombre.innerHTML = respuesta[i].nombreUser;

                    divNombre.appendChild(divEtiquetaNombre);
                    divNombre.appendChild(divDatosNombre);
                    tdNombre.appendChild(divNombre);
                    tr.appendChild(tdNombre);

                    //Categoria
                    tdCategoria = document.createElement("td");
                    divCategoria = document.createElement("div");
                    divEtiquetaCategoria = document.createElement("div");
                    divEtiquetaCategoria.innerHTML = "Categoria:"
                    divDatosCategoria = document.createElement("div");
                    divDatosCategoria.classList.add("font-weight-bold");
                    divDatosCategoria.classList.add("mt-1");
                    divDatosCategoria.innerHTML = respuesta[i].categoria;

                    divCategoria.appendChild(divEtiquetaCategoria);
                    divCategoria.appendChild(divDatosCategoria);
                    tdCategoria.appendChild(divCategoria);
                    tr.appendChild(tdCategoria);

                    //Categoria
                    tdSeccion = document.createElement("td");
                    divSeccion = document.createElement("div");
                    divEtiquetaSeccion = document.createElement("div");
                    divEtiquetaSeccion.innerHTML = "Seccion:"
                    divDatosSeccion = document.createElement("div");
                    divDatosSeccion.classList.add("font-weight-bold");
                    divDatosSeccion.classList.add("mt-1");
                    divDatosSeccion.innerHTML = respuesta[i].seccion;

                    divSeccion.appendChild(divEtiquetaSeccion);
                    divSeccion.appendChild(divDatosSeccion);
                    tdSeccion.appendChild(divSeccion);
                    tr.appendChild(tdSeccion);

                    //BOTONES
                    tdBotones = document.createElement("td");

                    //Detalles
                    btnDetalles = document.createElement("button");
                    btnDetalles.classList.add("btn");
                    btnDetalles.classList.add("btn-sm");
                    btnDetalles.classList.add("btn-secondary");
                    btnDetalles.innerHTML = "Detalles";
                    btnDetalles.classList.add("botonDetalles");
                    btnDetalles.value = respuesta[i].idUser;

                    //Eliminar
                    btnEliminar = document.createElement("button");
                    btnEliminar.innerHTML = "Eliminar";
                    btnEliminar.classList.add("btn");
                    btnEliminar.classList.add("btn-sm");
                    btnEliminar.classList.add("btn-danger");
                    btnEliminar.classList.add("botonDeleteUsuario");
                    btnEliminar.setAttribute("type", "button");
                    btnEliminar.setAttribute("data-bs-toggle", "modal");
                    btnEliminar.setAttribute("href", "#modalDeleteUsuario");
                    btnEliminar.value = respuesta[i].idUser;

                    tdBotones.appendChild(btnDetalles);
                    tdBotones.appendChild(btnEliminar);
                    tr.appendChild(tdBotones);


                    //Añadir el tr a la tabla
                    document.getElementById("listaDeportistas").appendChild(tr);
                }
                botonEliminarUsuarios();
                botonDetalles();
            }
        }
    })
}

// tablaPruebas: Genera una tabla con las pruebas del usuario.
// Recoge las pruebas del usuario junto al nombre de estas y las muestra en una tabla donde podremos añadir marcas o eliminarlas mediante los eventos establecidos en los botones.
function tablaPruebas(idUser) {
    $.ajax({
        async: false,
        data: { "idUser": idUser },
        url: 'php/selectAllPruebasUsuario.php',
        type: 'get',
        success: function (response) {
            if (response != false) {
                // La variable respuesta almacena un array con las filas recogidas de la DB.
                var respuesta = JSON.parse(response);
                for (var i = 0; i < respuesta.length; i++) {
                    tr = document.createElement("tr");

                    //Prueba
                    tdPrueba = document.createElement("td");
                    divPrueba = document.createElement("div");
                    divEtiquetaPrueba = document.createElement("div");
                    divEtiquetaPrueba.innerHTML = "Prueba:"
                    divDatosPrueba = document.createElement("div");
                    divDatosPrueba.classList.add("font-weight-bold");

                    divDatosPrueba.innerHTML = respuesta[i].nombrePrueba;

                    divPrueba.appendChild(divEtiquetaPrueba);
                    divPrueba.appendChild(divDatosPrueba);
                    tdPrueba.appendChild(divPrueba);
                    tr.appendChild(tdPrueba);


                    //Boton AñadirMarca
                    tdAñadirMarca = document.createElement("td");
                    btnAñadirMarca = document.createElement("button");
                    btnAñadirMarca.classList.add("botonAñadirMarca");
                    btnAñadirMarca.innerHTML = "Añadir Marca";
                    btnAñadirMarca.classList.add("btn");
                    btnAñadirMarca.classList.add("btn-sm");
                    btnAñadirMarca.classList.add("btn-secondary");
                    btnAñadirMarca.value = respuesta[i].prueba_user;
                    tdAñadirMarca.appendChild(btnAñadirMarca);
                    tr.appendChild(tdAñadirMarca);


                    //BotonEliminar
                    tdEliminar = document.createElement("td");
                    btnEliminar = document.createElement("button");
                    btnEliminar.innerHTML = "Eliminar";
                    btnEliminar.classList.add("btn");
                    btnEliminar.classList.add("btn-sm");
                    btnEliminar.classList.add("btn-danger");
                    btnEliminar.classList.add("botonDeletePrueba");
                    btnEliminar.setAttribute("type", "button");
                    btnEliminar.setAttribute("data-bs-toggle", "modal");
                    btnEliminar.setAttribute("href", "#modalDeletePrueba");
                    btnEliminar.value = respuesta[i].prueba_user;
                    tdEliminar.appendChild(btnEliminar);
                    tr.appendChild(tdEliminar);

                    //Marcas
                    tdMarcas = document.createElement("td");
                    tableMarcas = document.createElement("table");
                    tableMarcas.classList.add("table");
                    nombreTabla = "tableMarcas" + respuesta[i].prueba_user;
                    tableMarcas.setAttribute("id", nombreTabla);
                    tituloMarcas = document.createElement("h4");
                    tituloMarcas.classList.add("pb-2");
                    tituloMarcas.innerHTML = "Marcas:"
                    tbodyMarcas = document.createElement("tbody");

                    tableMarcas.appendChild(tituloMarcas);
                    tableMarcas.appendChild(tbodyMarcas);

                    tdMarcas.appendChild(tableMarcas);

                    tr.appendChild(tdMarcas)

                    //Añadir el tr a la tabla
                    document.getElementById("tablaUsuario").appendChild(tr);

                    tablaMarcas(respuesta[i].prueba_user);


                }
                botonFormMarcas();
                botonEliminarPrueba();
            }
        }
    })
}

// tablaMarcas: Recoge las marcas de la prueba y las muestra en una tabla.
// Recoge las fecha de registro y la marca en la prueba y las muestra en una tabla donde podremos eliminarlas mediante el boton eliminar.
function tablaMarcas(prueba_user) {
    $.ajax({
        async: false,
        data: { "prueba_user": prueba_user },
        url: 'php/selectMarcas.php',
        type: 'get',
        success: function (marcas) {
            if (marcas != false) {
                // La variable marcaPrueba almacena un array con las filas recogidas de la DB.
                var marcaPrueba = JSON.parse(marcas);
                for (i = 0; i < marcaPrueba.length; i++) {
                    tr = document.createElement("tr");

                    //Fecha
                    tdFecha = document.createElement("td");
                    tdFechaDiv = document.createElement("div");
                    tdFechaDiv.innerHTML = "Fecha:"
                    tdFechaDatos = document.createElement("div");
                    tdFechaDatos.innerHTML = marcaPrueba[i].fecha;
                    tdFechaDatos.classList.add("font-weight-bold");

                    tdFecha.appendChild(tdFechaDiv);
                    tdFecha.appendChild(tdFechaDatos);
                    tr.appendChild(tdFecha);

                    //Marca
                    tdMarca = document.createElement("td");
                    tdMarcaDiv = document.createElement("div");
                    tdMarcaDiv.innerHTML = "Marca:"
                    tdMarcaDatos = document.createElement("div");
                    tdMarcaDatos.innerHTML = marcaPrueba[i].marca;
                    tdMarcaDatos.classList.add("font-weight-bold");
                    tdMarca.appendChild(tdMarcaDiv);
                    tdMarca.appendChild(tdMarcaDatos);
                    tr.appendChild(tdMarca);
                    nombreTabla = "tableMarcas" + marcaPrueba[i].prueba_user;
                    document.getElementById(nombreTabla).appendChild(tr);

                    //BotonEliminar
                    tdEliminar = document.createElement("td");
                    btnEliminar = document.createElement("button");
                    btnEliminar.innerHTML = "Eliminar";
                    btnEliminar.classList.add("btn");
                    btnEliminar.classList.add("btn-sm");
                    btnEliminar.classList.add("btn-danger");
                    btnEliminar.classList.add("botonDeleteMarca");
                    btnEliminar.setAttribute("type", "button");
                    btnEliminar.setAttribute("data-bs-toggle", "modal");
                    btnEliminar.setAttribute("href", "#modalDeleteMarca");
                    btnEliminar.value = marcaPrueba[i].idMarca;
                    tdEliminar.appendChild(btnEliminar);
                    tr.appendChild(tdEliminar);
                }
                botonEliminarMarca();
            }
        }
    })
}

// botonDeleteUsuario: Elimina el usuario seleccionado.
function botonEliminarUsuarios() {
    //Primero genera un evento para los botones eliminar de la tabla, este carga el nombre del usuario en el modal para confirmar.
    boton = document.getElementsByClassName("botonDeleteUsuario");
    for (i = 0; i < boton.length; i++) {

        //Recoge la id del usuario almacenada como value en los botones.
        boton[i].addEventListener("click", (evt) => {
            idUser = evt.currentTarget.value;
            $.ajax({
                async: false,
                data: { "idUser": idUser },
                url: 'php/selectDeportista.php',
                type: 'get',
                success: function (user) {
                    deportista = JSON.parse(user);
                    document.getElementById("strongUsuarioEliminar").innerHTML = deportista.nombreUser;

                    // Segundo evento sobre el boton para confirmar la eliminación del usuario.
                    eliminarUsuario = document.getElementById("deleteUser");
                    eliminarUsuario.addEventListener("click", () => {
                        deleteFrom(idUser, "deportistas");
                        location.reload(true);
                    })
                }
            })
        })
    }
}

// botonEliminarPrueba: Elimina la prueba seleccionada.
function botonEliminarPrueba() {
    boton = document.getElementsByClassName("botonDeletePrueba");
    for (i = 0; i < boton.length; i++) {
        //Recoge la id de la prueba almacenada como value en los botones.
        boton[i].addEventListener("click", (evt) => {
            eliminarPrueba = document.getElementById("deletePrueba");
            prueba_user = evt.currentTarget.value;

            eliminarPrueba.addEventListener("click", () => {
                deleteFrom(prueba_user, "prueba_deportista");
                location.reload(true);
            })
        })
    }
}

// botonEliminarMarca: Elimina la marca seleccionada.
function botonEliminarMarca() {
    boton = document.getElementsByClassName("botonDeleteMarca");

    for (i = 0; i < boton.length; i++) {
        //Recoge la id de la marca almacenada como value en los botones.
        boton[i].addEventListener("click", (evt) => {
            eliminarMarca = document.getElementById("deleteMarca");
            idMarca = evt.currentTarget.value;

            eliminarMarca.addEventListener("click", () => {
                deleteFrom(idMarca, "marcas");
                location.reload(true);
            })
        })
    }
}

// botonFormMarcas: Carga el formulario de marcas.
// Este al depender de los valores de la prueba se activa una vez haya marcas registradas almacenando en los botones de añadir el value de la prueba.
function botonFormMarcas() {
    forms = document.getElementsByClassName("formHidden");

    botonAñadirMarca = document.getElementsByClassName("botonAñadirMarca");
    for (i = 0; i < botonAñadirMarca.length; i++) {
        botonAñadirMarca[i].addEventListener("click", (event) => {

            //Inserta como value el id de la prueba.
            prueba_user = event.currentTarget.value;
            document.getElementById("botonInsertMarcaManual").value = prueba_user;
            document.getElementById("botonInsertMarcaCrono").value = prueba_user;

            //OCULTAR OTROS FORMULARIOS Y MOSTRAR EL SELECCIONADO.
            for (i = 0; i < forms.length; i++) {
                forms[i].hidden = true;
            }
            document.getElementById("formAñadirMarca").hidden = false;
        })
    }
}