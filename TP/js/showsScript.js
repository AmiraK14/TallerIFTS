const requestURL = 'json/shows.json';
const request = new XMLHttpRequest;
request.open ('GET', requestURL);
request.responseType = 'json';
request.send();
productos3Round = '';
request.onload = function() {
    productos3Round = request.response;
    shows = productos3Round.Shows;
    agregarNavbar();
    agregarBarraSecciones('vivo');
    crearRankStars();
    ordenarFecha('reciente');
    agregarCards('ninguno','ninguno');
}


function ordenarUnParamDesc(prop){
    return function(a,b){  
        if(a[prop] < b[prop]){
            return 1;
        } else if(a[prop] > b[prop]){ 
            return -1; 
        } else {
            return 0;
        }
    }
}

function ordenarUnParamAsc(prop){
    return function(a,b){  
        if(a[prop] > b[prop]){
            return 1;
        } else if(a[prop] < b[prop]){ 
            return -1; 
        } else {
            return 0;
        }
    }
}

function ordenarVariosParamDesc(prop1,prop2, prop3){
    return function(a,b){  
        if(a[prop1] < b[prop1]){
            return 1;
        } else if(a[prop1] > b[prop1]){ 
            return -1; 
        } else {
            if (a[prop2] < b[prop2]){
                return 1;
            } else if (a[prop2] > b[prop2]){
                return -1
            } else {
                if (a[prop3] < b[prop3]){
                    return 1;
                } else if (a[prop3] > b[prop3]){
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    }
}

function ordenarVariosParamAsc(prop1,prop2, prop3){
    return function(a,b){  
        if(a[prop1] > b[prop1]){
            return 1;
        } else if(a[prop1] < b[prop1]){ 
            return -1; 
        } else {
            if (a[prop2] > b[prop2]){
                return 1;
            } else if (a[prop2] < b[prop2]){
                return -1
            } else {
                if (a[prop3] > b[prop3]){
                    return 1;
                } else if (a[prop3] < b[prop3]){
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    }
}

function ordenarFecha(criterio){
    shows = productos3Round.Shows;
    if (criterio == 'reciente'){
        shows.sort(ordenarVariosParamDesc('anio','mes','dia'));
    } else if (criterio == 'antigua'){
        shows.sort(ordenarVariosParamAsc('anio','mes','dia'));
    }
}

function ordenarPrecio(criterio){
    shows = productos3Round.Shows;
    if (criterio == 'mayor'){
        shows.sort(ordenarUnParamDesc('precio'));
    } else if (criterio == 'menor'){
        shows.sort(ordenarUnParamAsc('precio'));
    }
}

function setCriterioOrdenamiento(){
    botonFechaReciente = $('#flexRadioDefault1').prop('checked');
    botonFechaAntigua = $('#flexRadioDefault2').prop('checked');
    botonMenorPrecio = $('#flexRadioDefault3').prop('checked');
    botonMayorPrecio = $('#flexRadioDefault4').prop('checked');
    if (botonFechaReciente == true){
        ordenarFecha('reciente');
    } else if (botonFechaAntigua == true){
       ordenarFecha('antigua');
    } else if (botonMenorPrecio == true){
        ordenarPrecio('menor');
    } else if (botonMayorPrecio == true){
        ordenarPrecio('mayor');
    }
}


function agregarCards(criterio,opcion){
    $('#contenedorCards').empty();
    setCriterioOrdenamiento();
    for (i=0;i<shows.length;i++){
        miCard = '<div class="col-xl-4 col-lg-12">';
        miCard += '<div class="card text-white mb-3 text-center">'
        miCard += '<img src="'+shows[i].imgFlyer+'" class="card-img-top">'
        miCard += '<div class="card-body">'
        miCard += '<h5 class="card-title">'+shows[i].dia+'/'+shows[i].mes+'/'+shows[i].anio+'</h5>'
        miCard += '<h6 class="card-title">'+shows[i].lugar+'</h6>'
        miCard += '<h6 class="card-title">$ '+shows[i].precio+'</h6>'
        miCard += '<div class="row">'
        miCard += '<div class="col-6">'
        miCard += '<button id="botonTickets'+shows[i].id+'" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalTickets">Tickets</button></div>'
        miCard += '<div class="col-6">'  
        miCard += '<button id="botonOpinion'+shows[i].id+'" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalComentario">Comentario</button>'
        miCard += '</div></div></div></div></div>'  
        idBotonTickets = "#botonTickets"+shows[i].id
        idBotonOpinion = "#botonOpinion"+shows[i].id
        if (criterio == 'ninguno'){
            $('#contenedorCards').append(miCard);
        } else if (criterio == 'localidad'){
            if (shows[i].localidad == opcion){
                $('#contenedorCards').append(miCard);
            }
        } else if (criterio == 'vigencia'){
            if (shows[i].vigente == opcion){
                $('#contenedorCards').append(miCard);
            }
        } else if (criterio == 'gratuidad'){
            if (shows[i].gratis == opcion){
                $('#contenedorCards').append(miCard);
            }
        }
    }
    $('#contenedorCards').ready(function(){
        deshabilitarBotones();
    })
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
    star5 = $('#star5').prop('checked');
    star4 = $('#star4').prop('checked');
    star3 = $('#star3').prop('checked');
    star2 = $('#star2').prop('checked');
    star1 = $('#star1').prop('checked');
    mail = $('#formComentarioMail').val();
    comentario = $('#formComentarioComentario').val();
    if (star1 == false && star2 == false && star3 == false && star4 == false && star5 == false){
        alert("Ingrese una puntuacion");
    } else if (mail == '') {
        alert("Debe completar el campo mail");
    } else if (comentario == '') {
        alert("Deje su comentario para continuar");
    } else {
        alert(mail+' su comentario ha sido enviado con exito');
    }
}