//Get only router from express object
const { Router } = require("express");
const router = Router();
const Course = require('../models/course');


router.get('/', (request, response) => {
    response.status(200);
    response.render('addCourse', {
        title: 'Courses course',
        isAddCourse: true
    });
})

router.post('/', async (request, response) => {
    response.status(200);
    const course = new Course({
        title: request.body.title,
        desc: request.body.desc
    });
    try{
        await course.save();
        response.redirect('/courses')
    }catch(e){
        console.log(e);
    }
})
module.exports = router;

