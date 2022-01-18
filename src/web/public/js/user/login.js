window.onload = function () {
 
    let form = document.querySelector(".form-signin-data")

    let ulErrores = document.querySelector(".errores");

    form.addEventListener("submit", e =>{
        ulErrores.innerHTML=""

        /* ulErrores.forEach(error=>error.innerHTML = "") */

        let inputEmail = document.querySelector("#emailUsuario");
        let inputPassword = document.querySelector("#passUsuario");
        

        if(!validator.isEmail(inputEmail.value) || inputPassword.value.length < 8){
            e.preventDefault()
            ulErrores.innerHTML +=`<li>${"Debe ingresar un formato de EMAIL o PASSWORD valido"}</li>`
        }
        else{
            e.preventDefault()       
            fetch("http://localhost:8080/api/user/allUsers")
                .then(response => response.json())
                .then(data => {                    
                    let emailBuscado = data.find(email => email.email == inputEmail.value)
                    if(!emailBuscado){
                        console.log(emailBuscado);
                        e.preventDefault()
                        ulErrores.innerHTML +=`<li>${"El Email ingresado no existe o no es valido"}</li>`
                    }else{
                        form.submit()
                    }
                })
                .catch(error => console.log(error))
        } 
    })
}