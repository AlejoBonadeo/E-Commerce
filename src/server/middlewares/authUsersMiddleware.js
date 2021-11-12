/*MIDDLEWARE - VERIFICA SI UN USUARIO SE ENCUENTRA LOGUEADO */

module.exports = (req, res, next)=>{
    if(req.session.authUser == undefined){
        res.render('./user/login')
    }else{
        next()
    }

}