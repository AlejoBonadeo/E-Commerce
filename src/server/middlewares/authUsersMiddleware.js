/*MIDDLEWARE - VERIFICA SI UN USUARIO SE ENCUENTRA LOGUEADO */

module.exports = (req, res, next)=>{
    if(req.session.loggedUser == undefined){
        res.render('./user/login')
    }else{
        next()
    }

}