/* CRONOMETRO */
function botonCronometro() {
    hCron = 0;
    mCron = 0;
    sCron = 0;
    botonStart = document.getElementById("start_crono");
    botonRestart = document.getElementById("restart_crono");
    botonStop = document.getElementById("stop_crono");
    botonStart.addEventListener("click", () => {
        tiempo();
        intervaloCrono = setInterval(tiempo, 1000);
        botonStart.disabled = true;
        botonRestart.disabled = false;
        botonStop.disabled = false;
    })
    botonRestart.addEventListener("click", () => {
        clearInterval(intervaloCrono);
        hCron = 0;
        mCron = 0;
        sCron = 0;
        document.getElementById("text_cronometro").innerHTML = "00:00:00";
        botonStart.disabled = false;
        botonRestart.disabled = true;
        botonStop.disabled = true;
    })
    botonStop.addEventListener("click", () => {
        botonStop.disabled = true;
        botonStart.disabled = false;
        clearInterval(intervaloCrono);
    })
}

function tiempo() {
    sCron++
    if (sCron > 59) {
        mCron++;
        sCron = 0;
    }
    if (mCron > 60) {
        hCron++;
        mCron = 0;
    }

    if (sCron < 10) {
        sAuxCron = "0" + sCron;
    } else {
        sAuxCron = sCron;
    }

    if (mCron < 10) {
        mAuxCron = "0" + mCron
    } else {
        mAuxCron = mCron;
    }

    if (hCron < 10) {
        hAuxCron = "0" + hCron
    } else {
        hAuxCron = hCron;
    }
    document.getElementById("text_cronometro").innerHTML = hAuxCron + ":" + mAuxCron + ":" + sAuxCron;
}

function cronometro() {
    botonCronometro();
    document.getElementById("text_cronometro").innerHTML = "00:00:00";
}

/* FECHA ACTUAL */
function fechaActual() {
    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear() + ' - ' + date.toLocaleTimeString();
    return output
}


/* Funciones Básicas que no dependen de nada del programa. */

// deleteFrom: elimina una row de la tabla indicada.
//Recibe el nombre de una tabla junto con su primary key, en el archivo delteFrom.php dependiendo de la tabla que sea ajusta el id al nombre de la columna. 
function deleteFrom(id, tabla) {

    $.ajax({
        data: { "id": id, "tabla": tabla },
        url: 'php/deleteFrom.php',
        type: 'get',
    })
}

// botonActualizar: Refresca la página al pulsar el boton.
//Al hacer inserts aparecen unos modal, estos sirven para avisar que el insert no ha fallado y actualizar la página para mostrar los cambios efectuados.
function botonActualizar() {
    boton = document.getElementsByClassName("botonF5");
    for (let i = 0; i < boton.length; i++) {

        boton[i].addEventListener("click", () => {
            location.reload(true);
        })
    }
}

// botonesFroms: Crea eventos para mostrar el formulario deseado.
// Oculta todos los formularios para luego mostrar el seleccionado.
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


// insertDeportista: Evento para insertar usario.
// Recoge las variables del formulario e inserta el usuario en la bd.
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

// insertPrueba: Evento para insertar prueba.
// Recoge las variables del formulario e inserta la prueba en el usuario indicado.
function insertPrueba() {
    boton = document.getElementById("botonInsertPrueba");
    boton.addEventListener("click", () => {
        //Usuario
        var idUser = document.getElementById("botonAñadirPrueba").value;

        //Prueba
        seleccion = document.getElementById("selectPrueba");
        var idPrueba = seleccion.value;

        $.ajax({
            data: { "idPrueba": idPrueba, "idUser": idUser },
            url: 'php/insertPrueba.php',
            type: 'get',
        })
    })
}

// Marca: Evento para insertar marca.
// Recoge las variables del formulario e inserta la marca sobre la prueba indicada, dependiendo de si se escribe de forma manual o con funcionalidad del cronómetro.
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






function onCharge() {
    // FUNCIONALIDADES.
    cronometro();

    // MUESTRA DE DATOS
    seleccionPruebas();

    // FUNCIONES VISUALES
    botonActualizar();
    botonesForms();
    

    //inserts
    insertDeportista();
    insertPrueba();
    insertMarca();
}