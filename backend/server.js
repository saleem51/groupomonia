const http = require('http');
const app = require('./app');
const port = 'https://api-mania.osc-fr1.scalingo.io/';

 const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

// app.listen(port, function () {
//   console.log('Example app started!')
// })


 server.listen(port,function () {
  console.log('Example app started!')
});

// const normalizePort = val => {
//   const port = parseInt(val, 10);

//   if (isNaN(port)) {
//     return val;
//   }
//   if (port >= 0) {
//     return port;
//   }
//   return false;
// };
// const PORT = process.env.PORT;
// const port = 'https://api-mania.osc-fr1.scalingo.io/';
// //const port = //normalizePort(process.env.PORT || '3000');
// app.set('port', port);

// // const errorHandler = error => {
// //   if (error.syscall !== 'listen') {
// //     throw error;
// //   }
// //   const address = 'https://api-mania.osc-fr1.scalingo.io/';
// //   const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
// //   switch (error.code) {
// //     case 'EACCES':
// //       console.error(bind + ' requires elevated privileges.');
// //       process.exit(1);
// //       break;
// //     case 'EADDRINUSE':
// //       console.error(bind + ' is already in use.');
// //       process.exit(1);
// //       break;
// //     default:
// //       throw error;
// //   }
// // };

// const server = http.createServer(app);

// server.on('error', errorHandler);
// server.on('listening', () => {
//   const address = server.address();
//   const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
//   console.log('Listening on ' + bind);
// });

// server.listen(port);