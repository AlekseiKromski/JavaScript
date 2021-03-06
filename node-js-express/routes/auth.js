//Get only router from express object
const { Router } = require("express");
const router = Router();
const User = require('../models/user');
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');

router.get('/login', async (req,res) => {
    res.render('auth/login', {
        title: "Auth",
        isLogin: true,
    })
})

router.post('/register-in', async (req,res) => {
    try{    
        const {email_register, name_register, password_register, password_register_confirm} = req.body;
        let candidate = await User.findOne({email_register})
        if(candidate){
            res.redirect('/auth/login#register');
        }else{
            const hash_password = await bcrypt.hash(password_register,10)
            let user = new User({
                email: email_register, name: name_register, password: hash_password
            })
            await user.save()
            res.redirect("/auth/login#login");
        }
    }catch(e){
        console.log(e);
    }
})

router.post('/login-in', async (request,response) => {
    try{
        const {email, password} = request.body;
        let candidate = await User.findOne({email})
        if(candidate){
            let isSame = await bcrypt.compare(password, candidate.password);
            if(isSame){
                const user = candidate;
                request.user = user;
                request.session.isAuth = true;
                request.session.user = user;

                request.session.save(error => {
                    if(error){
                        console.log(error);
                    }
                    response.redirect('/');
                })
            }else{
                return response.redirect('/auth/login#login');
            }
        } else {
            return response.redirect('/auth/login#login');
        }

    }catch(e){
        console.log(e);
    }
})

router.get('/logout',auth, async (req,res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
    
})

module.exports = router;
