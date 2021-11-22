const requestURL = 'json/musica.json'; // temporal, hasta que pasemos los shows al json poductos
const request = new XMLHttpRequest;
request.open ('GET', requestURL);
request.responseType = 'json';
request.send();
productos3Round = '';
request.onload = function() {
    productos3Round = request.response;
    console.log(productos3Round);
    agregarNavbar();
    agregarCards();
    deshabilitarBotones()
}


function agregarNavbar(){
    var miNavBar = '<nav class="navbar navbar-dark bg-dark fixed-top">';
    miNavBar += '<nav class="navbar navbar-dark bg-dark fixed-top">';
    miNavBar += '<nav class="navbar navbar-dark bg-dark fixed-top">';
    miNavBar += '<div class="container-fluid">';
    miNavBar += '<div class="row">';
    miNavBar += '<a class="navbar-brand" href="index.html">';
    miNavBar += '<img src="imagenes/logo_estrella.png" id="estrellaLogo" class= "d-none d-lg-block">';
    miNavBar += '<img src="imagenes/logo_nombrebanda.png" id="nombreLogo"></a></div>';
    miNavBar += '<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">';
    miNavBar += '<span class="navbar-toggler-icon"></span></button>'
    miNavBar += '<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">'
    miNavBar += '<div class="offcanvas-body">'    
    miNavBar += '<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">'
    miNavBar += '<li class="nav-item">'
    miNavBar += '<a class="nav-link active" aria-current="page" href="nosotros.html">Nosotros</a></li>'
    miNavBar += '<li class="nav-item dropdown">'
    miNavBar += '<a class="nav-link dropdown-toggle" href="musica.html" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Nuestra música</a>'
    miNavBar += '<ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">'
    miNavBar += '<li><a class="dropdown-item" href="musica.html">En línea</a></li>'
    miNavBar += '<li><a class="dropdown-item" href="shows.html">En vivo</a></li>'
    miNavBar += '<li><a class="dropdown-item" href="merchandising.html">En merchandising</a></li></ul></li>'
    miNavBar += '<li class="nav-item"><a class="nav-link active" aria-current="page" href="formulario.html">Contacto</a></li>'
    miNavBar += '</ul></div></div></div></nav>'
            
    $('#headerSecciones').append(miNavBar);
}

function agregarCards(){
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