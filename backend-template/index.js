const Hapi = require("@hapi/hapi");
const Boom = require("@hapi/boom");

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost",
        routes: {
            cors: true,
        },
    });
    server.events.on("log", (event, tags) => {
        if (tags.error) {
            console.log(
                `Server error: ${event.error ? event.error.message : "unknown"}`
            );
        }
    });

    server.route({
        method: "GET",
        path: "/events",
        handler: async (request, h) => {
            // TODO: not implemented
            return Boom.notImplemented();
        },
    });

    server.route({
        method: "GET",
        path: "/events/{id}",
        handler: async (request, h) => {
            // TODO: not implemented
            return Boom.notImplemented();
        },
    });

    server.route({
        method: "POST",
        path: "/events",
        handler: async (request, h) => {
            // TODO: not implemented
            return Boom.notImplemented();
        },
    });

    server.route({
        method: "DELETE",
        path: "/events/{id}",
        handler: async (request, h) => {
            // TODO: not implemented
            return Boom.notImplemented();
        },
    });

    await server.start();
    console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
