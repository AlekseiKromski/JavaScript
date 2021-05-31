const {Router} = require('express');
const router = Router();
const Order = require('../models/order')

router.get('/', async (requset, response) => {
    response.render('order', {
        isOrder: true,
        title: 'Order'
    })   
});

router.get('/add', async (requset, response) => {
    response.redirect('/order')  
});

module.exports = router;