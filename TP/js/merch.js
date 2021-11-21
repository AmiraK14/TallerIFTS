const url = 'json/productos.json';
const request = new XMLHttpRequest;
request.open('GET', url);
request.responseType = 'json';
request.send();
productos3Round = '';

request.onload = function(){
    productos3Round = request.response;
    console.log(productos3Round);
}

