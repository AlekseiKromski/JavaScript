//Get only router from express object
const { Router } = require("express");
const router = Router();
const Course = require('../models/course')

router.get('/', async (request, response) => {
    response.status(200);
    const courses = await Course.getAll();
    response.render('courses', {
        title: 'Courses course',
        courses,
        isCourses: true
    });
    
})


router.get('/:id', async (request, response) => {
    response.status(200);
    const course = await Course.getCourseById(request.params.id);
    response.render('course', {
        title: 'Course' + course.id,
        course,
        isCourses: true,
        layout: 'empty'
    });
    
})


module.exports = router;
