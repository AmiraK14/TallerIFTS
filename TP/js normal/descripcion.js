const requestURL = 'json/merchandising.json';
const request = new XMLHttpRequest;
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
productosTresRound = '';

request.onload = function(){
    productosTresRound = request.response;
    merch = productosTresRound.articulosMerchandising;
    agregarNavbar();   
    console.log(localStorage.getItem('idDescripcion'));
    agregarCards(merch); 
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
        function llamarModal(){            
            $('#modalsSection').empty();
            miModal = '<div id="modalCompleto" class="modal" tabindex="-1">'
            miModal += '<div class="modal-dialog">'
            miModal += '<div class="modal-content">'
            miModal += '<div class="modal-header">'
            miModal += '<h5 class="modal-title">ENVIO EXITOSO</h5>'
            miModal += '<button type="button" class="btn-close botonCerrarModal" data-bs-dismiss="modal" aria-label="Close"></button></div>'
            miModal += '<div class="modal-body">'
            miModal += '<p> Su comentario ha sido enviado correctamente</p></div>'
            miModal += '<div class="modal-footer">'
            miModal += '<button type="button" class="btn btn-secondary botonCerrarModal" data-bs-dismiss="modal">Cerrar</button>'
            miModal += '</div></div></div></div>'
            console.log(miModal); 
            $('#modalsSection').append(miModal);
            $('#modalCompleto').show();
            $('.botonCerrarModal').click(function(){
                $('#modalCompleto').hide();
            })
        }
        function llamarModalCompra(){             
             $('#modalsSection').empty();
             miModal = '<div id="modalCompleto" class="modal" tabindex="-1">'
             miModal += '<div class="modal-dialog">'
             miModal += '<div class="modal-content">'
             miModal += '<div class="modal-header">'
             miModal += '<h5 class="modal-title">COMPRA EXITOSA</h5>'
             miModal += '<button type="button" class="btn-close botonCerrarModal" data-bs-dismiss="modal" aria-label="Close"></button></div>'
             miModal += '<div class="modal-body">'         
             miModal += '<div class="modal-footer">'
             miModal += '<button type="button" class="btn btn-secondary botonCerrarModal" data-bs-dismiss="modal">Cerrar</button>'
             miModal += '</div></div></div></div>'
             console.log(miModal); 
             $('#modalsSectionCompra').append(miModal);
             $('#modalCompleto').show();
             $('.botonCerrarModal').click(function(){
                 $('#modalCompleto').hide();
             })
         }                     
        function agregarCards(array){
            $('#sectorAgregarCards').empty();           
            for(i=0;i<merch.length;i++){
                if (merch[i].id == getParameterByName('idProducto')){               
                    miCard = ' <div class="col-xl-4 col-lg-12">';             
                    miCard +=' <div class="card text-white mb-3 text-center">';
                    miCard +=' <img src="'+array[i].img+' " class="card-img-top"> ';
                    miCard +=' <div class="card-body">';
                    miCard +=' <h5 class="card-title">'+array[i].nombre+' </h5> '; 
                    miCard +=' <h5 class="card-title">$'+array[i].precio+' </h5> '; 
                    miCard +=' <h5 class="card-title">'+array[i].descripcion+' </h5> '; 
                    miCard +=' <button type="button" onclick="llamarModalCompra();">Comprar</button> ';       
                    miCard += '</div></div></div>';   
                    $('#sectorAgregarCards').append(miCard);              
                }
            }
        }      
      function validarFormularioComentario(){
            star5 = $('#star5').prop('checked');
            star4 = $('#star4').prop('checked');
            star3 = $('#star3').prop('checked');
            star2 = $('#star2').prop('checked');
            star1 = $('#star1').prop('checked');
            mail = $('#mail').val();
            comentario = $('#comentario').val();
            if (star1 == false && star2 == false && star3 == false && star4 == false && star5 == false){
                llamarModalIncompleto('puntuacion');
            } else if (mail == '') {
                llamarModalIncompleto('e-mail');
            } else if (validarEmail(mail)==false) {
                llamarModalMailInvalido();
            } else if (comentario == '') {
                llamarModalIncompleto('comentario');
            } else {
                llamarModalCompleto(mail);
                $('#formComentarioShows').submit();
            }
        }