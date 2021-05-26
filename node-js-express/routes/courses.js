//Get only router from express object
const { Router } = require("express");
const router = Router();
const Course = require('../models/course')

router.get('/', async (request, response) => {
    response.status(200);
    const courses = await Course.find()
        .populate('user', 'email name')
        .lean();
    response.render('courses', {
        title: 'Courses course',
        courses,
        isCourses: true
    });

    
})


router.get('/:id', async (request, response) => {
    response.status(200);
    const course = await Course.findById(request.params.id).lean();
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

    const course = await Course.findById(request.params.id).lean();
    response.render('courseEdit', {
        title: 'Edit course' + course.id,
        course,
    });
})

router.get('/:id/remove', async (request, response) => {
    if (!request.query.allow) {
        return response.redirect('/');
    }

    try{
        await Course.deleteOne({
            _id: request.params.id
        });
        response.redirect('/courses')
    }catch (e){
        console.error(e);
    }
})

router.post('/:id/edit', async (request, response) => {
    await Course.findByIdAndUpdate(request.params.id, request.body);
    response.redirect('/courses')
})

module.exports = router;
