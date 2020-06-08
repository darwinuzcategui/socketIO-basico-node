var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});
// detectar que mi servidor se deconecto
//(.on) on son para escuchar evento y los emit para enviar informacion
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//Enviar Informacio (.emit) //cadena o boolean lo recomendarme es enviar objeto{}
socket.emit('enviarMensaje', {
    usuario: 'Darwin Uzcategui',
    mensaje: 'Hola Darwin'
}, function(resp) {
    // console.log('se disparo el callback');
    console.log('respuesta del servidor: ', resp);
});

// escuchar informacion
socket.on("enviarMensaje", function(mensaje) {
    console.log('Servidor:', mensaje);
});