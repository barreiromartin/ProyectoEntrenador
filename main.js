function mostrarForm(idBoton, idForm) {
    boton = document.getElementById(idBoton);
    form = document.getElementById(idForm);

    form.hidden = false;
    boton.hidden = true;
}

function seleccionPruebas() {
    $.ajax({
        data: { "nombre_tabla": "pruebas" },
        url: 'selectPruebas.php',
        type: 'get',
        success: function (response) {
            if (response != false) {
                var respuesta = JSON.parse(response);
                for (i = 0; i < respuesta.length; i++) {
                    opcion = document.createElement("option");
                    opcion.innerHTML = respuesta[i].nombrePrueba

                    document.getElementById("selectPrueba").appendChild(opcion);
                }
            }
        }
    })
}

function tablaDeportistas() {
    $.ajax({
        data: { "nombre_tabla": "deportistas" },
        url: 'main.php',
        type: 'get',
        success: function (response) {
            if (response != false) {
                var respuesta = JSON.parse(response);
                for (i = 0; i < respuesta.length; i++) {

                    tr = document.createElement("tr");

                    //ID
                    tdID = document.createElement("td");
                    divID = document.createElement("div");
                    divEtiquetaID = document.createElement("div");
                    divEtiquetaID.innerHTML = "ID"
                    divDatosID = document.createElement("div");
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
                    btnDetalles.value = respuesta[i].idUser
                    //Eliminar
                    btnEliminar = document.createElement("button");
                    btnEliminar.innerHTML = "Eliminar";
                    btnEliminar.classList.add("btn");
                    btnEliminar.classList.add("btn-sm");
                    btnEliminar.classList.add("btn-danger");

                    tdBotones.appendChild(btnDetalles);
                    tdBotones.appendChild(btnEliminar);
                    tr.appendChild(tdBotones);


                    //Añadir el tr a la tabla
                    document.getElementById("listaDeportistas").appendChild(tr);

                }
            }
        }
    })
}

function botonActualizar() {
    boton = document.getElementById("botonActualizar");
    modalTexto = document.getElementById("modalTexto");

    boton.addEventListener("click", () => {
        location.reload(true);
        modalTexto.innerHTML = "Usuario añadido con éxito a la base de datos.";

    })
}


function botonDetalles() {
    botones = document.getElementsByClassName("botonDetalles");

    for(i=0;i<botones.length;i++){
        botones[i].addEventListener("click", ()=>{
            
        })
    }
}





function __main__() {

    botonActualizar();

    //Activar Desactivar form de usuario
    botonAñadirUsuario = document.getElementById("botonAñadirUsuario");
    botonAñadirUsuario.addEventListener("click", () => {
        mostrarForm("botonAñadirUsuario", "formAñadirUsuario");
    })



    //LISTADO DE DEPORTISTAS
    tablaDeportistas();

    //AÑADIR PRUEBA LISTADO DE ESTAS
    seleccionPruebas();


    //AÑADIR DEPORTISTA
    botonNuevoUsuario = document.getElementById("botonNuevoUsuario");
    botonNuevoUsuario.addEventListener("click", () => {
        nombre = document.getElementById("nombreNuevoUsuario").value;
        categoria = document.getElementById("categoriaNuevoUsuario").value;
        seccion = document.getElementById("seccionNuevoUsuario").value;

        $.ajax({
            data: { "nombre": nombre, "categoria": categoria, "seccion": seccion },
            url: 'añadirUsuario.php',
            type: 'get',
        })
    })

}

__main__();