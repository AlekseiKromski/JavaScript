//Get only router from express object
const { Router } = require("express");
const router = Router();

router.get('/', (request, response) => {
    response.status(200);
    response.render('addCourse', {
        title: 'Courses course',
        courses: [
            {
                title: 'JavaScript junior developer',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
            },
            {
                title: 'JavaScript junior developer',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
            },
            {
                title: 'JavaScript junior developer',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
            },
        ],
        isAddCourse: true
    });
})

router.post('/', (request, response) => {
    response.status(200);
    response.redirect()
})
module.exports = router;

