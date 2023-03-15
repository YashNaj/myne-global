const sirv = require('sirv');
const http = require('http');

const options = {
  brotli: true,
  gzip: true,
  dev: process.env.NODE_ENV === 'development',
};

const serve = sirv('static', options);

const server = http.createServer(serve);

server.listen(3000, (err) => {
  if (err) throw err;
  console.log('Serving on http://localhost:3000');
});
