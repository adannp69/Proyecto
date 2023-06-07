const emailField        = document.querySelector("[name=correo]");
const passwordField     = document.querySelector("[name=contrasenia]");

/*
const nuevaContrasenia1Field = document.querySelector("[name=nuevaContrasenia1]");
const nuevaContrasenia2Field = document.querySelector("[name=nuevaContrasenia2]");
*/

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

const validarEmailFormat = e =>{
        const field = e.target;
        const fieldValue = e.target.value;
        const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        //console.log(regex.test(field.value));

        if(fieldValue.trim().length > 5 && !regex.test(fieldValue)){
                field.classList.add("invalid");
                field.nextElementSibling.classList.add("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
                field.nextElementSibling.innerText = `${field.name} is required`;
        }else{
                field.classList.remove("invalid");
                field.nextElementSibling.classList.remove("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
        }//FIN DE IF ELSE
}//FIN DE validarEmailFormat

const validarPasswordFormat = e =>{
        const field = e.target;
        const fieldValue = e.target.value;
        const regex = new regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
        //console.log(regex.test(field.value));

        if(fieldValue.trim().length > 5 && regex.test(fieldValue)){
                field.classList.add("invalid");
                field.nextElementSibling.classList.add("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
                //field.nextElementSibling.innerText = `${field.name} is required`;
        }else{
                field.classList.remove("invalid");
                field.nextElementSibling.classList.remove("error"); //AGREGA ELEMENTO AL SIGUIENTE ELEMENTO HERMANO
        }//FIN DE IF ELSE
}//FIN DE validarEmailFormat


emailField.addEventListener("blur", validaEmptyField);
passwordField.addEventListener("blur",validaEmptyField);


nuevaContrasenia1Field.addEventListener("blur", validaEmptyField);
nuevaContrasenia2Field.addEventListener("blur", validaEmptyField);

/*
emailField.addEventListener("input", validarEmailFormat);

//passwordField.addEventListener("input", validarPasswordFormat);

/*
const formulario = getElementById("formulario");
const inputs = document.querySelectorAll('#formulario input'); 

const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	//password: /^.{4,12}$/, // 4 a 12 digitos.
        contrasenia: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
}//FIN DE EXPRESIONES

/*
usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
*/

/*
function validarContraseniaRecuperacion(event){
        var contrasenia_1 = document.getElementById("nuevaContrasenia1").value;
        var contrasenia_2 = document.getElementById("nuevaContrasenia2").value; 
        var errorMessage = document.getElementById("error-message");
    
     if(contrasenia_1 !== contrasenia_2){
            event.preventDefault();//EVITA QUE EL FORMULARIO SE ENVÍE    
            errorMessage.style.display = "block";
    
    }else (contrasenia_1 === contrasenia_2)
            errorMessage.style.display = none;
    
    }//FIN DE FUNCION validarContraseniaRecuperacion
  */  