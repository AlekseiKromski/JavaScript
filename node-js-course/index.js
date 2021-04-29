const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": 'text/html; charset=utf-8',
    });
    if(request.method === "GET"){
        response.end(`
            <h1>From</h1>
            <form method="post" action="/">
                <input name="title" type="text" />
                <button type="submit">Отправить</button>
            </form>
        `)
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