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

module.exports = router;
