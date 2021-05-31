const e = require('express');
const {Router, request} = require('express');
const router = Router();
const Order = require('../models/order');
const logger = require('../logger');
const order = require('../models/order');
router.get('/', async (requset, response) => {

    const orders = await Order.find({
        'user.userId': request.user._id
    }).populate('user.userId').lean();
    response.render('order', {
        isOrder: true,
        title: 'Order',
        orders: orders.map(order => ({
            ...order
        }))
        
    });

    console.log(
        orders.map(order => ({
            ...order
        }))
    )
});

router.get('/add', async (requset, response) => {
    if(request.user !== null) {
        const user = await request.user
            .populate('card.items.course')
            .execPopulate();

        const courses = user.card.items.map(c => ({
            count: c.count,
            course: {...c.course._doc, count: c.count}
        }));

        const order = new Order({
            user: {
                name: request.user.name,
                userId: request.user
            },
            courses: courses
        })

        await order.save();
        await request.user.clearCard();
    }else{
        logger.log("request dont have user", "LOGGER_SYSTEM_ERROR")
    }
    response.redirect('/order')  
});

module.exports = router;