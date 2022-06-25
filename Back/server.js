import http from 'http';
import app from './app.js';

const port = 3001;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
