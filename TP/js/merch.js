const url = 'json/merchandising.json';
const request = new XMLHttpRequest;
request.open('GET', url);
request.responseType = 'json';
request.send();
productosTresRound = '';

request.onload = function(){
    productosTresRound = request.response;
    console.log(productosTresRound);
}

function productosAz (){

}

function productosZa(){

}

function productosDestacados(){
    
}
