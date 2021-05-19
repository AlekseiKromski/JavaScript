const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const card = require('./routes/card');
const coursesRoute = require('./routes/courses');
const addCourseRoute = require('./routes/addCourse');
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});
const path = require('path');
const mongoose = require('mongoose');
const { start } = require('repl');

//Register hbs engine
app.engine('hbs', hbs.engine);

//SET to use hbs extension
app.set('view engine', 'hbs');

//Set default views path
app.set('views', 'views');

//register statick folder
app.use(express.static(path.join(__dirname, 'public')));

//? set config for post ? 
app.use(express.urlencoded({
    extended: true
}));

//Set up atlas mongodb connection
const url_mongodb = "mongodb+srv://root:root@course-node-app.crjsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use('/',homeRoute);
app.use('/about',aboutRoute);
app.use('/courses',coursesRoute);
app.use('/add-course',addCourseRoute);
app.use('/card/',card);
async function start_server(){
    try{
        //set connection
        await mongoose.connect(url_mongodb, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log('Server started on port: ' + PORT);
        })

    }catch(e){
        console.log(e);
    }    
}

//start all application 
start_server();




