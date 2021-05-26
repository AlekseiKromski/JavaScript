const {Router} = require('express');
const Card = require('../models/card');
const Course = require('../models/course');
const router = Router();

function mapCourses(user){
    return user.card.items.map(c => ({
      ...c.course._doc, count: c.count
    }));
}

router.get('/add/:id', async (request, response) => {
   const course = await Course.findById(request.params.id);
   
   try{
        await request.user.addToCard(course);
    }catch(e){
        console.log(e);
    }
   response.redirect('/card');
})

router.get('/', async (request, response) => {
    const user = await request.user
        .populate('card.items.course')
        .execPopulate();
    response.render('card', {
        title: 'Card',
        card: mapCourses(user),
        isCard: true
    });
}) 

router.delete('/delete/:id', async (request, response) => {
    let user = await request.user.removeIntoCard(request.params.id);
    response.json(user.card);
})

module.exports = router;