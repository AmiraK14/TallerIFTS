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
    agregarBarraSecciones('linea');
    crearRankStars();
    agregarComentario();
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
        elementoAccordeon += '<iframe src="'+elementosCD.canciones[i].spotify+'" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
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

function validarFormularioComentario(){
    star5 = $('#star5').prop('checked');
    star4 = $('#star4').prop('checked');
    star3 = $('#star3').prop('checked');
    star2 = $('#star2').prop('checked');
    star1 = $('#star1').prop('checked');
    mail = $('#formComentarioMail').val();
    comentario = $('#formComentarioComentario').val();
    if (mail == '') {
        llamarModalIncompleto('mail');
    } else if (star1 == false && star2 == false && star3 == false && star4 == false && star5 == false){
        llamarModalIncompleto('puntuacion');
    } else if (comentario == '') {
        llamarModalIncompleto('comentario');
    } else {
        llamarModalCompleto(mail);
        $('#formComentario').submit();
    }
}

function llamarModalIncompleto(campo){
    $('#modalsSection').empty();
    miModal = '<div id="modalIncompleto" class="modal" tabindex="-1">'
    miModal += '<div class="modal-dialog">'
    miModal += '<div class="modal-content">'
    miModal += '<div class="modal-header">'
    miModal += '<h5 class="modal-title">Datos incompletos</h5>'
    miModal += '<button type="button" class="btn-close botonCerrarModal" data-bs-dismiss="modal" aria-label="Close"></button></div>'
    miModal += '<div class="modal-body">'
    miModal += '<p>Debe completar el campo '+campo+'</p></div>'
    miModal += '<div class="modal-footer">'
    miModal += '<button type="button" class="btn btn-secondary botonCerrarModal" data-bs-dismiss="modal">Cerrar</button>'
    miModal += '</div></div></div></div>'
    $('#modalsSection').append(miModal);
    $('#modalIncompleto').show();
    $('.botonCerrarModal').click(function(){
        $('#modalIncompleto').hide();
    })
}

function llamarModalCompleto(mail){
    $('#modalsSection').empty();
    miModal = '<div id="modalCompleto" class="modal" tabindex="-1">'
    miModal += '<div class="modal-dialog">'
    miModal += '<div class="modal-content">'
    miModal += '<div class="modal-header">'
    miModal += '<h5 class="modal-title">Envio exitoso</h5>'
    miModal += '<button type="button" class="btn-close botonCerrarModal" data-bs-dismiss="modal" aria-label="Close"></button></div>'
    miModal += '<div class="modal-body">'
    miModal += '<p>'+mail+' su comentario ha sido enviado</p></div>'
    miModal += '<div class="modal-footer">'
    miModal += '<button type="button" class="btn btn-secondary botonCerrarModal" data-bs-dismiss="modal">Cerrar</button>'
    miModal += '</div></div></div></div>'
    $('#modalsSection').append(miModal);
    $('#modalCompleto').show();
    $('.botonCerrarModal').click(function(){
        $('#modalCompleto').hide();
    })
}

function agregarComentario(){
    mail= getParameterByName('mailFormulario');
    puntaje= getParameterByName('rate');
    comentario=getParameterByName('commentFormulario');
    if (mail!=''){
        newComment = '<li class="list-group-item d-flex justify-content-between align-items-start">'
        newComment += '<div class="ms-2 me-auto">';
        newComment += '<div class="fw-bold">'+mail+'</div>';
        newComment += comentario+'</div></li>';
        //$('#ContenedorComentarios').prop('hidden',false);
        cantidadComentarios=$('#cantidadComentarios').text();
        cantidadComentariosInt=parseInt(cantidadComentarios);
        cantidadComentariosInt++;
        $('#cantidadComentarios').text(cantidadComentariosInt);
        $('#listadoComentarios').append(newComment);
    }
}