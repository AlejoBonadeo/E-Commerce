/*MIDDLEWARE - VERIFICA SI UN USUARIO SE NO ENCUENTRA LOGUEADO */
function guestMiddleware (req, res, next){
    if(!req.session.user){
        next();
    } else {
        res.redirect ('/');
    }
}
module.exports = guestMiddleware;
