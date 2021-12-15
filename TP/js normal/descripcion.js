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
    //agregarCardsXParametro(array);
    //llamarModalCompleto();
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
 
     /* function agregarCards(array){
            $('#sectorAgregarCards').empty();           
            for (i=0;i<array.length;i++){
                if(localStorage.getItem('idDescripcion')== array[i].id){                
                    miCard = ' <div class="col-xl-4 col-lg-12">';             
                    miCard +=' <div class="card text-white mb-3 text-center">';
                    miCard +=' <img src="'+array[i].img+' " class="card-img-top"> ';
                    miCard +=' <div class="card-body">';
                    miCard +=' <h5 class="card-title">'+array[i].nombre+' </h5> '; 
                    miCard +=' <h5 class="card-title">$'+array[i].precio+' </h5> '; 
                    miCard +=' <h5 class="card-title">'+array[i].descripcion+' </h5> '; 
                    miCard +=' <button type="submit">Comprar</button> ';       
                    miCard += '</div></div></div>';   
                    $('#sectorAgregarCards').append(miCard);              
                }
            }
        }*/
        
        function llamarModal(){   
           /* miModal = '<div id="modalCompleto" class="modal" tabindex="-1">'
            miModal += '<div class="modal-dialog">'
            miModal += '<div class="modal-content">'
            miModal += '<div class="modal-header">'
            miModal += '<h5 class="modal-title">Envio exitoso</h5>'
            miModal += '<button type="button" class="btn-close botonCerrarModal" data-bs-dismiss="modal" aria-label="Close"></button></div>'
            miModal += '<div class="modal-body">'
            miModal += '<p> su comentario ha sido enviado</p></div>'
            miModal += '<div class="modal-footer">'
            miModal += '<button type="button" class="btn btn-secondary botonCerrarModal" data-bs-dismiss="modal">Cerrar</button>'
            miModal += '</div></div></div></div>'
            $('#modalsSection').append();*/
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
         
        
      
       /* function agregarCardsXParametro(){
            if (getParameterByName('idProducto') != ''){
                for(i=0;i<merch.length;i++){
                    if (merch[i].id == getParameterByName('idProducto')){
                        $('#sectorAgregarCards').empty();
                        miCard = ' <div class="col-xl-4 col-lg-12">';
                        miCard +=' <div class="card text-white mb-3 text-center">';
                        miCard +=' <img src="'+merch[i].img+' " class="card-img-top"> ';
                        miCard +=' <form method="get" action="descripcion.html"><div class="card-body">';
                        miCard +=' <h5 class="card-title">'+merch[i].nombre+' </h5> '; 
                        miCard += '<input type="hidden" value="'+merch[i].id+'" name="idProducto">' 
                        miCard += '<input type="hidden" value="'+merch[i].precio+'" name="idProducto">'   
                        miCard += '<input type="hidden" value="'+merch[i].descripcion+'" name="idProducto">'   
                        miCard += '<button type="submit" class="btn btn-secondary btn-sm">Comprar</button>';                                              
                        miCard += '</div></form></div></div>';
                        $('#sectorAgregarCards').append(miCard);
                    }
                }
            }
        }*/
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
        //if (merch[i].id == getParameterByName('idProducto')){