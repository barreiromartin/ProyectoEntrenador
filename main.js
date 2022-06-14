function seleccionPruebas() {
    $.ajax({
        data: { "nombre_tabla": "pruebas" },
        url: 'php/selectAllPruebas.php',
        type: 'get',
        success: function (response) {
            if (response != false) {
                var respuesta = JSON.parse(response);
                for (i = 0; i < respuesta.length; i++) {
                    opcion = document.createElement("option");
                    opcion.innerHTML = respuesta[i].nombrePrueba;
                    opcion.value = respuesta[i].idPrueba;
                    document.getElementById("selectPrueba").appendChild(opcion);
                }
            }
        }
    })
}






















function botonActualizar() {
    boton = document.getElementsByClassName("botonF5");
    for (let i = 0; i < boton.length; i++) {

        boton[i].addEventListener("click", () => {
            location.reload(true);
        })

    }

}

function botonDetalles() {
    var botones = document.getElementsByClassName("botonDetalles");
    tarjetaUser = document.getElementById("tarjetaUser");

    for (i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", (evt) => {
            tarjetaUser.hidden = false;
            tarjetaDeportista(evt.currentTarget.value);

        })
    }
}

function tarjetaDeportista(idUser) {
    document.getElementById("botonAñadirPrueba").value = idUser;

    $.ajax({
        async: false,
        data: { "idUser": idUser },
        url: 'php/selectDeportista.php',
        type: 'get',
        success: function (user) {
            deportista = JSON.parse(user);
            //Titulo Tarjeta
            document.getElementById("tituloTarjeta").innerHTML = deportista.nombreUser;

            tablaPruebas(deportista.idUser)

        }
    })
}







// deleteFrom: elimina una row de la tabla indicada.
//Recibe el nombre de una tabla junto con su primary key, en el archivo delteFrom.php dependiendo de la tabla que sea ajusta el id al nombre de la columna. 
function deleteFrom(id, tabla) {

    $.ajax({
        data: { "id": id, "tabla": tabla },
        url: 'php/deleteFrom.php',
        type: 'get',
    })
}


function botonesForms() {
    forms = document.getElementsByClassName("formHidden");

    botonAñadirUsuario = document.getElementById("botonAñadirUsuario");
    botonAñadirPrueba = document.getElementById("botonAñadirPrueba");
    botonAñadirMarca = document.getElementById("botonAñadirMarca");

    botonAñadirPrueba.addEventListener("click", () => {
        for (i = 0; i < forms.length; i++) {
            forms[i].hidden = true;
        }
        document.getElementById("formAñadirPrueba").hidden = false;
    })

    botonAñadirUsuario.addEventListener("click", () => {
        for (i = 0; i < forms.length; i++) {
            forms[i].hidden = true;
        }
        document.getElementById("formAñadirUsuario").hidden = false;
    })
}



function insertDeportista() {
    boton = document.getElementById("botonInsertarUsuario");
    boton.addEventListener("click", () => {
        nombre = document.getElementById("nombreNuevoUsuario").value;
        categoria = document.getElementById("categoriaNuevoUsuario").value;
        seccion = document.getElementById("seccionNuevoUsuario").value;

        $.ajax({
            data: { "nombre": nombre, "categoria": categoria, "seccion": seccion },
            url: 'php/insertUser.php',
            type: 'get',
        })
    })
}

function insertPrueba() {
    boton = document.getElementById("botonInsertPrueba");
    boton.addEventListener("click", () => {
        //Usuario
        var idUser = document.getElementById("botonAñadirPrueba").value;

        //Prueba
        seleccion = document.getElementById("selectPrueba");
        var idPrueba = seleccion.value;

        console.log(idUser, idPrueba);


        $.ajax({
            data: { "idPrueba": idPrueba, "idUser": idUser },
            url: 'php/insertPrueba.php',
            type: 'get',
        })
    })
}

function insertMarca() {
    botonManual = document.getElementById("botonInsertMarcaManual");


    botonManual.addEventListener("click", (evt) => {
        //Usuario
        marcaManual = document.getElementById("marcaManual").value;
        fecha = fechaActual();
        $.ajax({
            data: { "prueba_user": evt.currentTarget.value, "marca": marcaManual, "fecha": fecha },
            url: 'php/insertMarca.php',
            type: 'get',
        })
    })

    botonCrono = document.getElementById("botonInsertMarcaCrono");

    botonCrono.addEventListener("click", (evt) => {
        //Usuario
        marcaCrono = document.getElementById("text_cronometro").innerHTML;
        fecha = fechaActual();
        $.ajax({
            data: { "prueba_user": evt.currentTarget.value, "marca": marcaCrono, "fecha": fecha },
            url: 'php/insertMarca.php',
            type: 'get',
        })
    })
}

function __main__() {

    botonActualizar();

    botonesForms();

    cronometro();

    //LISTADO DE DEPORTISTAS
    tablas();

    //AÑADIR PRUEBA LISTADO DE ESTAS
    seleccionPruebas();

    //BOTON DE DETALLES
    botonDetalles();

    //AÑADIR DEPORTISTA
    insertDeportista();

    insertPrueba();

    insertMarca();

    botonEliminarUsuarios()


}

__main__();