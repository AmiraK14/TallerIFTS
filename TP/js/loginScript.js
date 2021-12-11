agregarNavbar();


//agregarNavbar();
//validarCampos();


function agregarNavbar(){
    var miNavBar = '<nav class="navbar navbar-dark bg-dark fixed-top">';
    miNavBar += '<nav class="navbar navbar-dark bg-dark fixed-top">';
    miNavBar += '<nav class="navbar navbar-dark bg-dark fixed-top">';
    miNavBar += '<div class="container-fluid">';
    miNavBar += '<div class="row">';
    miNavBar += '<a class="navbar-brand" href="index.html">';
    miNavBar += '<img src="../imagenes/logo_estrella.png" id="estrellaLogo" class= "d-none d-lg-block">';
    miNavBar += '<img src="../imagenes/logo_nombrebanda.png" id="nombreLogo"></a></div>';
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



function validarCampos(){
    mail = $('#loginInputEmail').val();
    pass = $('#loginInputPassword').val();
    if (mail == ''){
        llamarModalIncompleto('e-mail');
    } else {
        if (validarEmail(mail) == false){
            llamarModalMailInvalido();
        } else if (pass == ''){
            llamarModalIncompleto('contraseña');
        } else {
            URL = '../json/datosUsers.json';
            $.getJSON(URL,function(data){
                console.log(data);
                checkUserData(data,mail,pass);
            })
            //checkUserData(mail,pass);
            //$('#formLogin').submit();
        }
    }
}

function checkUserData(data,usuario,password){
    usuarios = data.Users;
    usuarioExistente = false;
    for (i=0;i<usuarios.length;i++){
        if (usuario == usuarios[i].user){
            usuarioExistente = true;
            //alert("USUARIO EXISTENTE");
        }
    }
    if (usuarioExistente == false){
        alert("El usuario no se encuentra registrado");
    } else {
        alert("USUARIO EXISTENTE");
    }
}