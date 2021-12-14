abrirModal();
cerrarModal();


/* function enviarDatos() {
    $('#botonEnviar').click(function() {
        validarDatos;
    })


*/

function abrirModal() {
    $('#botonEnviar').click(function() {
        nombre = $('#nombre').val();
        apellido = $('#apellido').val();
        celular = $('#celular').val();
        email = $('#email').val();
        comentario = $('#comentario').val();
        if (nombre == '' || apellido == '' || celular == '' || email == '' || comentario == '') {
            $('#modalUno').show();
        } else { 
            llamarModalCompleto(nombre, apellido, email, celular);
        }
    })

}

function cerrarModal() {
    $('.botonCerrarModal').click(function() {
        $('#modalUno').hide();

    })

}

function llamarModalCompleto(){
    $('#modalsSection').empty();
    miModal = '<div id="modalCompleto" class="modal" tabindex="-1">'
    miModal += '<div class="modal-dialog">'
    miModal += '<div class="modal-content">'
    miModal += '<div class="modal-header">'
    miModal += '<h5 class="modal-title">Envio exitoso</h5>'
    miModal += '<button type="button" class="btn-close botonCerrarModal" data-bs-dismiss="modal" aria-label="Close"></button></div>'
    miModal += '<div class="modal-body">'
    miModal += '<p><strong>'+nombre+' '+apellido+'</strong></p>'
    miModal += '<p>'+email+'</p>'
    miModal += '<p>'+celular+'</p>'
    miModal += '<p>su comentario <i>'+comentario+'</i> ha sido enviado</p></div>'
    miModal += '<div class="modal-footer">'
    miModal += '<button type="button" class="btn btn-secondary botonCerrarModal" data-bs-dismiss="modal">Cerrar</button>'
    miModal += '</div></div></div></div>'
    $('#modalsSection').append(miModal);
    $('#modalCompleto').show();
    $('.botonCerrarModal').click(function(){
        $('#modalCompleto').hide();
    })
}