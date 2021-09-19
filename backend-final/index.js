const Hapi = require("@hapi/hapi");
const { PrismaClient } = require("@prisma/client");

const init = async () => {
  const prisma = new PrismaClient();

  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/events",
    handler: (request, h) => {
      const event = await prisma.event.findMany();

      return event;
    },
  });

  server.route({
    method: "GET",
    path: "/events/{id}",
    handler: function (request, h) {
      const event = await prisma.event.findUnique({
        where: {
          id: request.id,
        },
      });
      return event;
    },
  });

  server.route({
    method: "POST",
    path: "/events",
    handler: function (request, h) {
      const payload = request.payload;

      const event = await prisma.user.create({
        data: {
          payload,
        },
      });

      return event;
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
