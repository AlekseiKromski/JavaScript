const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const varMiddleware = require('./middleware/variables');
const userMiddleware = require('./middleware/user');
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const card = require('./routes/card');
const order = require('./routes/order');
const User = require('./models/user');
const coursesRoute = require('./routes/courses');
const addCourseRoute = require('./routes/addCourse');
const authRoute = require('./routes/auth');
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
const path = require('path');
const mongoose = require('mongoose');
const { start } = require('repl');
const { request } = require('express');
let url_mongodb = "mongodb+srv://root:root@course-node-app.crjsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
let app_user_id = "60cc96d635dfd30574aacbdf";
const mongouser = true;
const logger = require('./logger')  
logger.setLoggerLogs(false)

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
logger.setServiceName("LOGGER_MONGODB_CUSTOM")
if(!mongouser){
    url_mongodb = "mongodb+srv://root:root@courseapp.4sqcj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    app_user_id = "60addfda3f0c6f23ece8c10c"
    logger.log("set new id for future user search db cluster link")
    logger.log("set 'ask-lo' db cluster link")
}else{
    logger.log("set 'no name' db cluster link")
}

const store = new MongoStore({
    collection: 'sessions',
    uri: url_mongodb,
});

app.use(session({
    secret: "some secret value",
    resave: false,
    saveUninitialized: false,
    store,
}));
app.use(varMiddleware);
app.use(userMiddleware);
logger.log("All middlewares was installed");
logger.log("All settings were installed");
app.use('/',homeRoute);
app.use('/about',aboutRoute);
app.use('/courses',coursesRoute);
app.use('/add-course',addCourseRoute);
app.use('/card/',card);
app.use('/order/',order);
app.use('/auth',authRoute);
logger.log("Success router installation", "LOGGER");
async function start_server(){
    try{
        //set connection
        await mongoose.connect(url_mongodb, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        logger.log("Success connection to mongodb")
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            logger.setServiceName("LOGGER_SERVER")
            logger.log("Server was started. Port for usage: " + PORT)
        })
        logger.makeDefaultSettings();
    }catch(e){
        logger.log("Faild connection to mongodb")
        console.log(e);
    }    
}

//start all application 
start_server();




