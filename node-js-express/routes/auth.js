//Get only router from express object
const { Router } = require("express");
const router = Router();

router.get('/login', async (req,res) => {
    res.render('auth/login', {
        title: "Auth",
        isLogin: true,
    })
})

router.post('/login-in', async (req,res) => {
    req.session.isAuth = true;
    res.redirect('/');
})

router.get('/logout', async (req,res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
    
})

module.exports = router;
