const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": 'text/html; charset=utf-8',
    });
    if(request.method === "GET"){
        if(request.url == '/'){
            
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (error, content) => {
                    if(error){
                        throw error;
                    }
                    response.end(content);
            });
        }else if(request.url == '/about'){
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (error, content) => {
                    if(error){
                        throw error;
                    }
                    response.end(content);
            });
        }else if(request.url == '/api/users'){
            response.writeHead(200, {
                "Content-Type": 'text/json; charset=utf-8',
            });
            response.end(JSON.stringify([
                {
                    name: 'Jelena',
                    age: 22
                },{
                    name: 'Aleksander',
                    age: 22
                },{
                    name: 'Julia',
                    age: 22
                }
            ]));
        }
    }else if(request.method === "POST"){
        const body = [];
        request.on('data', data => {
            body.push(Buffer.from(data));
        });
        request.on('end', () => {
            const message = body.toString().split('=')[1]
            response.end(`
            <p>Your text is: ${message}</p>
            `)
        })
    }
})


server.listen(3000, () => {
    console.log('Server is started');
})