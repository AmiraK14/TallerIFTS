const requestURL = 'json/shows.json';
const request = new XMLHttpRequest;
request.open ('GET', requestURL);
request.responseType = 'json';
request.send();
productos3Round = '';
request.onload = function() {
    productos3Round = request.response;
    console.log(productos3Round);
    agregarNavbar();
    agregarBarraSecciones('vivo');
    crearRankStars();
}

function agregarCards(){
    $('#contenedorCards').empty();
    shows = productos3Round.Shows;
    for (i=0;i<shows.length;i++){
        miCard = '<div class="col-xl-4 col-lg-12">';
        miCard += '<div class="card text-white mb-3 text-center">'
        miCard += '<img src="'+shows[i].imgFlyer+'" class="card-img-top">'
        miCard += '<div class="card-body">'
        miCard += '<h5 class="card-title">'+shows[i].fecha+'</h5>'
        miCard += '<h6 class="card-title">'+shows[i].lugar+'</h6>'
        miCard += '<div class="row">'
        miCard += '<div class="col-6">'
        miCard += '<button id="botonTickets'+shows[i].id+'" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalTickets">Tickets</button></div>'
        miCard += '<div class="col-6">'  
        miCard += '<button id="botonOpinion'+shows[i].id+'" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalComentario">Comentario</button>'
        miCard += '</div></div></div></div></div>'  
        idBotonTickets = "#botonTickets"+shows[i].id
        idBotonOpinion = "#botonOpinion"+shows[i].id
        $('#contenedorCards').append(miCard);
    }
    $('#contenedorCards').ready(function(){
        deshabilitarBotones();
    })
}

function agregarCardsPorLocalidad(localidad){
    $('#contenedorCards').empty();
    shows = productos3Round.Shows;
    for (i=0;i<shows.length;i++){
        miCard = '<div class="col-xl-4 col-lg-12">';
        miCard += '<div class="card text-white mb-3 text-center">'
        miCard += '<img src="'+shows[i].imgFlyer+'" class="card-img-top">'
        miCard += '<div class="card-body">'
        miCard += '<h5 class="card-title">'+shows[i].fecha+'</h5>'
        miCard += '<h6 class="card-title">'+shows[i].lugar+'</h6>'
        miCard += '<div class="row">'
        miCard += '<div class="col-6">'
        miCard += '<button id="botonTickets'+shows[i].id+'" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalTickets">Tickets</button></div>'
        miCard += '<div class="col-6">'  
        miCard += '<button id="botonOpinion'+shows[i].id+'" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalComentario">Comentario</button>'
        miCard += '</div></div></div></div></div>'  
        idBotonTickets = "#botonTickets"+shows[i].id
        idBotonOpinion = "#botonOpinion"+shows[i].id
        if (shows[i].localidad == localidad){
            $('#contenedorCards').append(miCard);
        }
    }
    $('#contenedorCards').ready(function(){
        deshabilitarBotones();
    })
}

function agregarCardsPorFecha(vigencia){
    $('#contenedorCards').empty();
    shows = productos3Round.Shows;
    for (i=0;i<shows.length;i++){
        miCard = '<div class="col-xl-4 col-lg-12">';
        miCard += '<div class="card text-white mb-3 text-center">'
        miCard += '<img src="'+shows[i].imgFlyer+'" class="card-img-top">'
        miCard += '<div class="card-body">'
        miCard += '<h5 class="card-title">'+shows[i].fecha+'</h5>'
        miCard += '<h6 class="card-title">'+shows[i].lugar+'</h6>'
        miCard += '<div class="row">'
        miCard += '<div class="col-6">'
        miCard += '<button id="botonTickets'+shows[i].id+'" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalTickets">Tickets</button></div>'
        miCard += '<div class="col-6">'  
        miCard += '<button id="botonOpinion'+shows[i].id+'" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalComentario">Comentario</button>'
        miCard += '</div></div></div></div></div>'  
        idBotonTickets = "#botonTickets"+shows[i].id
        idBotonOpinion = "#botonOpinion"+shows[i].id
        if (shows[i].vigente == vigencia){
            $('#contenedorCards').append(miCard);
        }
        $('#contenedorCards').ready(function(){
            deshabilitarBotones();
        })
    }
}

function deshabilitarBotones(){
    shows = productos3Round.Shows;
    for (i=0;i<shows.length;i++){
        if (shows[i].vigente == false){
            $("#botonTickets"+shows[i].id).addClass('disabled')
            $("#botonOpinion"+shows[i].id).removeClass('disabled')
        } else {
            $("#botonTickets"+shows[i].id).removeClass('disabled')
            $("#botonOpinion"+shows[i].id).addClass('disabled')
        }
    }
}


function validarFormularioCompra(){
    mail = document.getElementById('formCompraMail');
    cantidadTickets = document.getElementById('formCompraCantidad');
    nombre = document.getElementById("formCompraNombre");
    apellido = document.getElementById("formCompraApellido");
    if (nombre.value == '') {
        alert("Debe completar el campo nombre");
    } else if (apellido.value == '') {
        alert("Debe completar el campo apellido");
    } else if (mail.value == '') {
        alert("Debe completar el campo mail");
    } else if (cantidadTickets.value == 'Selecciona la cantidad de tickets') {
        alert("Debe seleccionar la cantidad de tickets que desea adquirir")
    } else {
        alert(nombre.value+' '+apellido.value+'\n'+mail.value+"\n"+"Vas a comprar la cantidad de "+cantidadTickets.value+' tickets\nRESERVA EXITOSA');
    }
}

function validarFormularioComentario(){
    mail = $('#formComentarioMail').val();
    comentario = $('#formComentarioComentario').val();
    if (mail == '') {
        alert("Debe completar el campo mail");
    } else if (comentario == '') {
        alert("Deje su comentario para continuar");
    } else {
        alert(mail+' su comentario ha sido enviado con exito');
    }
}