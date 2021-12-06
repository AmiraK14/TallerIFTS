const requestURL = 'json/allproducts.json';
const request = new XMLHttpRequest;
request.open ('GET', requestURL);
request.responseType = 'json';
request.send();
productos3Round = '';
request.onload = function() {
    productos3Round = request.response;
    mostrarProductosDestacados();
}



function mostrarProductosDestacados(){
    contadorDestacados = 0;
    productosTotales = productos3Round.allProducts;
    productosTotales = productosTotales.sort((a, b) => 0.5 - Math.random());
    for (i=0;i<productosTotales.length;i++){
        if(productosTotales[i].destacado == true && contadorDestacados < 6){
            miniatura = '<div class="col-2">';
            miniatura += '<form  method="get" action="'+productosTotales[i].seccion+'">'
            miniatura += '<button type="submit"><img src="'+productosTotales[i].img+'" class="img-thumbnail"></button>';
            miniatura += '<input type="hidden" name="idProducto" value="'+productosTotales[i].id+'"></div></form>'
            $('#thumbnailsContainer').append(miniatura);
            contadorDestacados++;
            }
        }   
}