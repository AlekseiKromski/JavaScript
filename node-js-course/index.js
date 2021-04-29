const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.write('<h1>Hello from node js</h1>');
    response.write('<h2>Test</h2>');
    response.end();
})


server.listen(3000, () => {
    console.log('Server is started');
})