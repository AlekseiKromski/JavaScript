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
    const course = new Course(request.body.title, request.body.desc);
    await course.save();
    response.redirect('/courses')
})
module.exports = router;

