const {Router} = require('express');
const Card = require('../models/card');
const Course = require('../models/course');
const router = Router();

router.get('/add/:id', async (request, response) => {
   const course = await Course.findById(request.params.id);
   
   try{
        console.log("user",request.user);
        await request.user.addToCard(course);
    }catch(e){
        console.log(e);
    }
   response.redirect('/card');
})

router.get('/', async (request, response) => {
    //const card = await Card.find().lean();
    const card = request.user.card;
    console.log(request.user.card.items[0].course)
    response.render('card', {
        title: 'Card',
        card,
        isCard: true
    });
}) 

router.delete('/delete/:id', async (request, response) => {
    const course = await Course.getCourseById(request.params.id);
    await Card.delete(course);
    const card = await Card.fetch();
    response.json(card);
})

module.exports = router;