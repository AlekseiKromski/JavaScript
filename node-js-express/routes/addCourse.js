//Get only router from express object
const { Router } = require("express");
const router = Router();
const Course = require('../models/course');
const auth = require('../middleware/auth');


router.get('/', auth, (request, response) => {
    response.status(200);
    response.render('addCourse', {
        title: 'Courses course',
        isAddCourse: true
    });
})

router.post('/', auth, async (request, response) => {
    response.status(200);
    const course = new Course({
        title: request.body.title,
        desc: request.body.desc,
        user: request.user
    });
    try{
        await course.save();
        response.redirect('/courses')
    }catch(e){
        console.log(e);
    }
})
module.exports = router;

