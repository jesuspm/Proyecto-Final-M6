// FUNCION PARA MARCAR CAMPO EN ROJO SI ESTA VACIO
let validateForm = {
    username:false,
    email:false,
    passwordLower:false,
    passwordUpper:false,
    passwordNum: false,
    passwordChar:false
};

let compruebaUser = document.getElementById("cRegistro");


compruebaUser.addEventListener("focusout", function(){
    if (compruebaUser.value ==="") {
        compruebaUser.style.borderColor = "red";
        validateForm.username = false;
    }else{
        compruebaUser.style.borderColor = "green";
        validateForm.username = true;
    }
});

function validateEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        console.log("ok");
        return true;
    }else{
        console.log("KO");
        return false;
    }
}

//Comprueba si contiene los caracteres especiales el correo
let compruebaEmail = document.getElementById("cEmail");
compruebaEmail.addEventListener("focusout", function(){
    if (validateEmail(this.value)) {
        compruebaEmail.style.borderColor = "green";
        validateForm.email = true;
    }else{
        compruebaEmail.style.borderColor = "red";
        validateForm.email = false;
    }
})

// Requisitos para la password
let lowerCaseLetters = /[a-z]/;
let upperCaseLetters = /[A-Z]/;
let numbers = /[0-9]/;
let specialCaracter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

let compruebaPwd = document.getElementById("cPassword");

    compruebaPwd.addEventListener("input", function(){
    let pass = compruebaPwd.value;

    //Comprueba las minusculas en la contraseña
    let lowerTest = lowerCaseLetters.test(pass);
    if(lowerTest){
        document.querySelector("#pswrdMinuscula").style.color = "chartreuse";
        validateForm.passwordLower = true;
    }else{
        document.querySelector("#pswrdMinuscula").style.color = "red";
        validateForm.passwordLower = false;
    }
    
    //Comprueba las mayusculas en la contraseña
    let upperTest = upperCaseLetters.test(pass)

    if(upperTest){
        document.querySelector("#pswrdMayuscula").style.color = "chartreuse";
        validateForm.passwordUpper = true;
    }else{
        document.querySelector("#pswrdMayuscula").style.color = "red";
        validateForm.passwordUpper = false;

    }
    
    //Comprueba si contiene numero en la contraseña
    let numbertest = numbers.test(pass);
    
    if(numbertest){
        document.querySelector("#pswrdNumero").style.color = "chartreuse";
        validateForm.passwordNum = true;
    }else{
        document.querySelector("#pswrdNumero").style.color = "red";
        validateForm.passwordNum = false;
    }

    //Comprueba si tiene caracter especial en la contraseña

    let specialcaract = specialCaracter.test(pass)

    if(specialcaract){
        document.querySelector("#pswrdEspecial").style.color = "chartreuse";
        validateForm.passwordChar = true;
    }else{
        document.querySelector("#pswrdEspecial").style.color = "red";
        validateForm.passwordChar = false;
    }
   
    
});

//SI SE CUMPLE TODAS LAS CONDICIONES DE REGISTRO SALDRÁ UN ALERT.
function conditionsOk(){
    console.log("asdf");
    let validateFormFinal = true;

    let arrayValues = Object.values(validateForm); // [true, false, true, true, false, false]
    console.log(arrayValues);
    let i = 0;
    //Recorrer el arrayValues i mirar si hay algun FALSE si hay un FALSE que la variable sea false.
    console.log( arrayValues.length);
    while (validateFormFinal == true && i < arrayValues.length) {
        //Ira recorriendo cada posicion y si es true la ira concatenando
        if(arrayValues[i] == true){
            i++;
        }else{
            //Si encuentra alguna posicion del array que sea false saldra del bucle
            validateFormFinal = false;
            break;
        }
    }   
    //Si todas las posiciones del array de objetos es true mostrará el alert
    if(validateFormFinal==true){
        alert("Registro completado con exito!")
    //Si alguna posicion del array es false mostrará el siguiente altert.
    }else{
        alert("Ha habido un error")
    }
}
