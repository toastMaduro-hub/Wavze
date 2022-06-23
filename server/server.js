const express = require('express');
const app = express();
const port = 3000;

const reports = require('./ReportsHandler');
const users = require('./UsersHandler');
const signup = require('./SignupHandler');
const login = require('./LoginHandler');
const feed = require('./FeedHandler');

const path = require('path');
app.use(express.json());

// serve the static files, index.html && bundle.js

app.get('/bundle.js', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../public/bundle.js'));
});

app.use('/signup', signup);

app.use('/login', login);

// app.use('/feed', feed);

app.use('/reports', reports);

app.use('/users', users);

app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// // set port
// const PORT = process.env.PORT || 3000;

// // import the middleware functions for CRUD operations
// const ReportControllers = require('./controllers/ReportControllers');

// // create server
// const server = http.createServer();

// // listen for GET request to the bundle.js in order to serve the frontend react app

// server.on('request', (req, res) => {
//   if (req.method === 'GET' && req.url === '/bundle.js') {
//     const data = fs.readFile(
//       path.resolve(__dirname, './public/bundle.js'),
//       (err, data) => {
//         if (err) {
//           res.writeHead(404);
//           res.end(JSON.stringify(err));
//           return;
//         }
//         console.log('javascript');
//         res.writeHead(200);
//         res.end(data);
//       }
//     );
//   }
// });

// // listen for GET request to serve the index.html file which request the bundle.js file
// server.on('request', (req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     const data = fs.readFile(
//       path.resolve(__dirname, './public/index.html'),
//       (err, data) => {
//         if (err) {
//           res.writeHead(400);
//           res.end(JSON.stringify(err));
//           console.log('error')
//           return;
//         }
//         console.log('index');
//         res.writeHead(200);
//         res.end(data);
//         return;
//       }
//     );
//   }
// });

// // listen for GET request to /api route to serve the list of user generated reports
// server.on('request', (req, res) => {
//   if (req.method === 'GET' && req.url === '/api') {
//     ReportControllers.getReports().then((response) => {
//       response = Buffer.from(response);
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.write(response);
//       res.end();
//       return;
//     });
//   }
// });

// // listen for POST request to /signup route to then respond with the same info that was sent
// server.on('request', (req, res) => {
//   if ((req.method = 'POST' && req.url === '/signup')) {
//     let body = '';

//     req.setEncoding('utf-8');

//     req.on('data', (chunk) => {
//       body += chunk;
//     });

//     req.on('end', () => {
//       const data = JSON.parse(body);
//       res.write(`this is what you sent ${body}`);
//       res.end();
//     });
//   }
// });

// // initialize server
// server.listen(PORT, () => {
//   console.log(`Server is listening on port: ${PORT}`);
// });
