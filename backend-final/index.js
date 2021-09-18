const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/hello/{user}',
        handler: function (request, h) {
    
            return `Hello ${request.params.user}!`;
        }
    });

    server.route({
        method: 'POST',
        path: '/signup',
        handler: function (request, h) {
    
            const payload = request.payload;
    
            return `Welcome ${payload.username}!`;
        }
    });
    

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();