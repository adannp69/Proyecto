const nombreField            = document.querySelector("[name=nombre]");
const apellidoPaternoField   = document.querySelector("[name=apellidoPaterno]");
const apellidoMaternoField   = document.querySelector("[name=apellidoMaterno]");

const nombreUsuarioField     = document.querySelector("[name=nombreUsuario]");

const emailField             = document.querySelector("[name=correo]");
const contrasenia1Field      = document.querySelector("[name=contrasenia1]");
const contrasenia2Field      = document.querySelector("[name=contrasenia2]");

const fechaField             = document.querySelector("[name=fecha]");

validaEmptyField = (e) =>{
    const field = e.target; 
    const fieldValue = e.target.value;      //target almacena lo escrito en input

    if(fieldValue.trim().length === 0){
            console.log("FUERA DE CAMPO!");
            field.classList.add("invalid");
            field.nextElementSibling.classList.add("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
            //field.nextElementSibling.innerText = `${field.name} is required`;
    }else{
            field.classList.remove("invalid");
            field.nextElementSibling.classList.remove("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
    }//FIN DE IF ELSE
}//FIN DE validaEmptyField


nombreField.addEventListener("blur", validaEmptyField);
apellidoPaternoField.addEventListener("blur", validaEmptyField);
apellidoMaternoField.addEventListener("blur", validaEmptyField);


nombreUsuarioField.addEventListener("blur", validaEmptyField);
emailField.addEventListener("blur", validaEmptyField);

contrasenia1Field.addEventListener("blur", validaEmptyField);
contrasenia2Field.addEventListener("blur", validaEmptyField);

fechaField.addEventListener("blur", validaEmptyField);