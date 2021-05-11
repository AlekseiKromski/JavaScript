const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

//Register hbs engine
app.engine('hbs', hbs.engine);

//SET to use hbs extension
app.set('view engine', 'hbs');

//Set default views path
app.set('views', 'views');

//register statick folder
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.status(200);
    response.render('index');
});
app.get('/about', (request, response) => {
    response.status(200);
    response.render('about');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
})