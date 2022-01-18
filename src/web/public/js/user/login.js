window.onload = function () {
 
    let form = document.querySelector(".form-signin-data")

    let divError = document.querySelector(".errorFront");

    let erroresBack = document.querySelectorAll(".errorBack")

    form.addEventListener("submit", e =>{
        if(erroresBack){
            erroresBack.forEach(error=> error.innerHTML="")
        }

        divError.innerHTML=""

        let inputEmail = document.querySelector("#emailUsuario");
        let inputPassword = document.querySelector("#passUsuario");
        

        if(!validator.isEmail(inputEmail.value) || inputPassword.value.length < 8){
            e.preventDefault()
            divError.innerHTML +=`<p>${"Debe ingresar un formato de EMAIL o PASSWORD (+8 digit) valido"}</p>`
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
                        divError.innerHTML +=`<li>${"Email o password incorrectos"}</li>`
                    }else{
                        form.submit()
                    }
                })
                .catch(error => console.log(error))
        } 
    })
}