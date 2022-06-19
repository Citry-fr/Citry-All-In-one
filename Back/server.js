import http from 'http';

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.end('Hello World');
    });

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});