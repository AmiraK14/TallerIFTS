function validarFormularioContacto() {
    nombre = document.getElementById('nombre');
    apellido = document.getElementById('apellido');
    telefono = document.getElementById("celular");
    email = document.getElementById("email");
    comentario = document.getElementById('comentario')
    if (nombre.value == '') {
        alert("Debe completar el campo nombre");
    } else if (apellido.value == '') {
        alert("Debe completar el campo apellido");
    } else if (celular.value == '') {
        alert("Debe completar el campo telefono");
    } else if (email.value == 'Debe completar el campo email') {
        alert("Debe completar el campo email")
    } else if (comentario.value == 'Debe completar el campo comentario') {
        alert("Debe completar el campo email")
    } else {
        alert("los datos fueron enviados exitosamente" + '\n' +

            nombre.value + ' ' + apellido.value + '\n' + mail.value + "\n");
    }
}