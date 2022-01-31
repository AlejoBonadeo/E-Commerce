window.onload = function () {
 
    let form = document.querySelector("#form-registro")

    let ulErrores = document.querySelector(".errores");

    form.addEventListener("submit", e =>{
        ulErrores.innerHTML=""
        let errors = [];

        let inputNombre = document.querySelector("#nombreDeUsuario");
        let inputApellido = document.querySelector("#apellidoDeUsuario");
        let inputEmail = document.querySelector("#emailUsuario");
        let inputPassword = document.querySelector("#passUsuario");
        let inputRepeatPassword = document.querySelector("#repeatpassUsuario");
        let inputImagen = document.querySelector("#user_img");

        if (inputNombre.value.length < 2)
            errors.push("NOMBRE debe tener al menos 2 caracteres");
        if (inputApellido.value.length < 2)
            errors.push("APELLIDO debe tener al menos 2 caracteres");
        if (!validator.isEmail(inputEmail.value))
            errors.push("EMAIL debe tener un formato valido");
        if (inputPassword.value.length < 8)
            errors.push("PASSWORD debe tener al menos 8 caracteres");
        if (inputRepeatPassword.value != inputPassword.value)
            errors.push("Ambras PASSWORDS deben ser iguales");
        if (inputImagen.files.length>0 && (inputImagen.files[0].type != "image/png" && inputImagen.files[0].type != "image/jpg" && inputImagen.files[0].type != "image/jpeg" && inputImagen.files[0].type != "image/gif"))
            errors.push("La imagen debe ser un formato valido (JPG, JPEG, PNG, GIF).");

        console.log(errors);
        if (errors.length > 0) {
            e.preventDefault()
            errors.forEach(error => {
                ulErrores.innerHTML +=`<li>${error}</li>`
            })
        }
    })
}