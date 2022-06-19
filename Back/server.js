import http from 'http';
import app from './app.js';

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});