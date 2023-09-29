const server = Bun.serve({
    port: 3333,
    fetch(request) {
      return new Response("Welcome to Bun!");
    },
  });
  
  console.log(`Listening on localhost: ${server.port}`);