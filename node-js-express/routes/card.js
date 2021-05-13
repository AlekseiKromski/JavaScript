const {Router} = require('express');
const Card = require('../models/card');
const Course = require('../models/course');
const router = Router();

router.get('/add/:id', async (request, response) => {
   const course = await Course.getCourseById(request.params.id);
   await Card.add(course);
   response.redirect('/card');
})

router.get('/', async (request, response) => {
    const card = await Card.fetch();
    response.render('card', {
        title: 'Card',
        card,
        isCard: true
    });
 })

module.exports = router;