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
    productosTotales = productos3Round.allProducts;
    for (i=0;i<productosTotales.length;i++){
        if(productosTotales[i].destacado == true){
            miniatura = '<div class="col-2">';
            miniatura += '<a href="'+productosTotales[i].seccion+'"><img src="'+productosTotales[i].img+'" class="img-thumbnail"></a></div>';
            $('#thumbnailsContainer').append(miniatura);
        }
    }
}