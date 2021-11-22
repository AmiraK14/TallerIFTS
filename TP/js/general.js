const requestURL = 'json/musica.json';
const request = new XMLHttpRequest;
request.open ('GET', requestURL);
request.responseType = 'json';
request.send();
productos3Round = '';
request.onload = function() {
    productos3Round = request.response;
    console.log(productos3Round);
    agregarNavbar();
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


function agregarElementosAccordeon(numeroCD){
    elementosCD = productos3Round.CD[numeroCD];
    for (i=0; i<elementosCD.canciones.length; i++){        
        elementoAccordeon = '<div class="accordion-item">'
        elementoAccordeon += '<h2 class="accordion-header" id="'+elementosCD.canciones[i].id+'">'
        elementoAccordeon += '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+elementosCD.canciones[i].id+'" aria-expanded="false" aria-controls="collapse'+elementosCD.canciones[i].id+'">'+elementosCD.canciones[i].titulo+'</button>'
        elementoAccordeon += '</h2>'
        elementoAccordeon += '<div id="collapse'+elementosCD.canciones[i].id+'" class="accordion-collapse collapse" aria-labelledby="heading'+elementosCD.canciones[i].id+'" data-bs-parent="#accordionExample">'
        elementoAccordeon += '<div class="accordion-body">'
        elementoAccordeon += '<iframe src="'+elementosCD.canciones[i].spotify+'" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
        elementoAccordeon += '<button class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Dejanos tu opinion</button>'
        elementoAccordeon += '</div></div></div>'
        $('#accordionExample').append(elementoAccordeon)
    }
}

function crearAccordeon(numeroCD){
    elementosCD = productos3Round.CD[numeroCD];
    miAccordeon = '<span id="acordeonCD'+elementosCD.idCD+'" class="col-md-6 col-sm-12 elementosDiscos">'; //hay que cambiar el id
    miAccordeon += '<div class="accordion" id="accordionExample">'
    miAccordeon += '</div></span>';
    $('#contenedorListaCanciones').append(miAccordeon);
    agregarElementosAccordeon(numeroCD);
}

function crearContenedorAccordeon(numeroCD){
    elementosCD = productos3Round.CD[numeroCD];
    miContenedor = '<div class="row text-center"></div>';
    miContenedor += '<div class="card mx-auto border-white col-xl-5 col-lg-12 elementosDiscos mt-3">';
    miContenedor += '<img src="'+elementosCD.imagen+'" class="card-img-top imagenCD mx-auto">';
    miContenedor += '<div id="contenedorListaCanciones" class="card-body"></div>';
    $('#ContenedorPrincipal').html(miContenedor);
    crearAccordeon(numeroCD);
}