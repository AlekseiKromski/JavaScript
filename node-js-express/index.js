const express = require('express');
const app = express();
const path = require('path');


app.get('/', (request, response) => {
    response.status(200);
    response.sendFile(path.join(__dirname, "views", "index.html"))
});
app.get('/about', (request, response) => {
    response.status(200);
    response.sendFile(path.join(__dirname, "views", "about.html"))
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
})