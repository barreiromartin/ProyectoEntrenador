function mostrarForm(idBoton, idForm) {
    boton = document.getElementById(idBoton);
    form = document.getElementById(idForm);

    form.hidden = false;
    boton.hidden = true;
}

function listadoDeportistas() {
    $.ajax({
        data: { "nombre_tabla": "deportistas" },
        url: 'main.php',
        type: 'get',
        success: function (response) {
            if (response != false) {
                var respuesta = JSON.parse(response);
                for (i = 0; i < respuesta.length; i++) {
                    console.log(respuesta[i].id + " " + respuesta[i].nombre + " " + respuesta[i].categoria + " " + respuesta[i].seccion);
                }
            }

        }
    })
}

function añadirTr() {
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
                    divDatosID.innerHTML = respuesta[i].id;
                    
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
                    divDatosNombre.innerHTML = respuesta[i].nombre;
                    
                    divNombre.appendChild(divEtiquetaNombre);
                    divNombre.appendChild(divDatosNombre);
                    tdNombre.appendChild(divNombre);
                    tr.appendChild(tdNombre);
                
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



function __main__() {

    botonActualizar();

    //Activar Desactivar form de usuario
    botonAñadirUsuario = document.getElementById("botonAñadirUsuario");
    botonAñadirUsuario.addEventListener("click", () => {
        mostrarForm("botonAñadirUsuario", "formAñadirUsuario");
    })



    //LISTADO DE DEPORTISTAS
    añadirTr();



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