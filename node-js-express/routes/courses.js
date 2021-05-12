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

router.get('/:id/edit', async (request, response) => {
    if (!request.query.allow) {
        return response.redirect('/');
    }

    const course = await Course.getCourseById(request.params.id);
    response.render('courseEdit', {
        title: 'Edit course' + course.id,
        course,
    });
})

router.post('/:id/edit', async (request, response) => {
    await Course.editCourse(request.body, request.params.id);
    response.redirect('/courses')
})

module.exports = router;
