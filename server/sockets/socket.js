const { io } = require('../server')
    // para conocer que cliente esta conectado
io.on('connection', (cliente) => {

    console.log('Usuario Cliente Conectado');

    cliente.emit("enviarMensaje", {

        nombre: "servidor",
        mensaje: "envio desde mi servidor"

    });

    cliente.on('disconnect', () => {
        console.log('usuario desconectado');

    });

    //escuchar el cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);
        cliente.broadcast.emit('enviarMensaje', data);

        /*
                if (mensaje.usuario) {
                    callback({
                        resp: 'TODO SALIO BIEN !'
                    });

                } else {
                    callback({
                        resp: 'TODO SALIO MAL !!!!!!!!!!'
                    });

                }
        */


    });


});