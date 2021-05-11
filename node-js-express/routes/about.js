//Get only router from express object
const { Router } = require("express");
const router = Router();

router.get('/', (request, response) => {
    response.status(200);
    response.render('about', {
        title: 'About page',
        isAbout: true
    });
})

module.exports = router;
