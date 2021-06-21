const {Router} = require('express');
const Card = require('../models/card');
const Course = require('../models/course');
const router = Router();
const logger = require('../logger')
const auth = require('../middleware/auth');
function mapCourses(user){
    return user.card.items.map(c => ({
      ...c.course._doc, count: c.count
    }));
}

router.get('/add/:id',auth, async (request, response) => {
   const course = await Course.findById(request.params.id);
   
   try{
        await request.session.user.addToCard(course);
        logger.log(`course{${course.title}} was added into user{${request.user.name}}`)
    }catch(e){
        console.log(e);
    }
   response.redirect('/card');
})

router.get('/', async (request, response) => {
    
    if(request.user !== null){
        const user = await request.user
            .populate('card.items.course')
            .execPopulate();
        response.render('card', {
            title: 'Card',
            card: mapCourses(user),
            isCard: true
        });
        
    }else{
        logger.log("request dont have user", "LOGGER_SYSTEM_ERROR")
    }
}) 

router.delete('/delete/:id',auth, async (request, response) => {
    let user = await request.user.removeIntoCard(request.params.id);
    response.json(user.card);
})

module.exports = router;