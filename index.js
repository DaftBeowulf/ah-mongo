const server = require("./api/server");

const port = process.env.PORT || 6000;

server.listen(port, () => {
  console.log(`\n=== Server's running on port ${port}, bro`);
});
