const Hapi = require("@hapi/hapi");
const Boom = require("@hapi/boom");
const { PrismaClient } = require("@prisma/client");

const init = async () => {
    const prisma = new PrismaClient();

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
            const event = await prisma.event.findMany();
            return event;
        },
    });

    server.route({
        method: "GET",
        path: "/events/{id}",
        handler: async (request, h) => {
            const event = await prisma.event.findUnique({
                where: {
                    id: Number(request.params.id),
                },
            });

            if (event == null) {
                return Boom.notFound();
            }

            return event;
        },
    });

    server.route({
        method: "POST",
        path: "/events",
        handler: async (request, h) => {
            const payload = request.payload;

            const event = await prisma.event.create({
                data: {
                    name: payload.name,
                    building: payload.building,
                    location: payload.location,
                    start_time: new Date(payload.start_time),
                    description: payload.description,
                    link: payload.link,
                    image_uri: payload.image_uri,
                },
            });

            return event;
        },
    });

    server.route({
        method: "DELETE",
        path: "/events/{id}",
        handler: async (request, h) => {
            try {
                const event = await prisma.event.delete({
                    where: {
                        id: Number(request.params.id),
                    },
                });

                return event;
            } catch (e) {
                return Boom.notFound();
            }
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
