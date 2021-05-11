const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const coursesRoute = require('./routes/courses');
const addCourseRoute = require('./routes/addCourse');
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

//? set config for post ? 
app.use(express.urlencoded({
    extended: true
}));

//set route
app.use('/',homeRoute);
app.use('/about',aboutRoute);
app.use('/courses',coursesRoute);
app.use('/add-course',addCourseRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
})