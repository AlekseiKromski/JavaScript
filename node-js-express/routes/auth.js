//Get only router from express object
const { Router } = require("express");
const router = Router();
const User = require('../models/user');
const auth = require('../middleware/auth');

router.get('/login', async (req,res) => {
    res.render('auth/login', {
        title: "Auth",
        isLogin: true,
    })
})

router.post('/login-in', async (request,response) => {
    const user = await User.findById("60cc96d635dfd30574aacbdf");
    request.user = user;
    request.session.isAuth = true;

    request.session.save(error => {
        if(error){
            console.log(error);
        }
        response.redirect('/');
    })
    
})

router.get('/logout',auth, async (req,res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
    
})

module.exports = router;
