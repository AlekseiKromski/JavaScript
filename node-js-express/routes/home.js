//Get only router from express object
const { Router } = require("express");
const router = Router();

router.get('/', (request, response) => {
    response.status(200);
    response.render('index', {
        title: 'Main page',
        isHome: true
    });
})

module.exports = router;
