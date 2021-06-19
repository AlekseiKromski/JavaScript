module.exports = function(request, response, next){
    response.locals.isAuth = request.session.isAuth;
    next();
}