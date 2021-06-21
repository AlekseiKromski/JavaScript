module.exports = function(request, response, next){
    if(!request.session.isAuth){
        return response.redirect('/auth/login');
    }
    next();
}