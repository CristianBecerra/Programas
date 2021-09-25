// Aca exportamos todo el código
// export { default as checkCorreo } from './emailCheck.js'
// export { default as checkNumDocumento } from './documentNumberCheck.js'
// export { default as checkContrasena } from './passwordCheck.js'


function checkCorreo(valor){
    const correct = 'background-color: green; padding: 5px; border-radius: 5px; color: white'
    const incorrect = 'background-color: red; padding: 5px; border-radius: 5px; color: white'
    // console.log(`Este es el valor: ${valor}`);
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
            console.log(`%cLa dirección de email ${valor} es correcto`, correct);
            return true
        } else {
            console.log(`%cLa dirección de email ${valor} no es correcto`, incorrect);
            return false// verdadero o falso
        }
}

function checkContrasena(valor) {
    console.log(`Este es el valor: ${valor}`);
    /**CÓDIGO DE VALIDACIÓN */
    let myRegEx = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/; 
    if(myRegEx.test(valor)){
        // alert(valor+" es valido :-) !");
        return true;        
    }else{
        // alert(valor+" NO es valido!");

        return false// verdadero o falso
    }
}

// const checkContrasena2 = valor =>  /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/.test(valor)

function checkNumDocumento2(valor, tipo){
    /* POSIBLES VALORES DE TIPO:
     * CC CUANDO ES CÉDULA DE CIUDADANÍA
     * CE CUANDO ES CÉDULA DE EXTRANJERÍA
     * PA CUANDO ES PASAPORTE
     * OT CUANDO ES OTRO
     */
    
    console.log(`Este es el valor: ${valor} y este el tipo: ${tipo}`);
    /**CÓDIGO DE VALIDACIÓN */
    return 8 < valor.length && valor.length < 10 
    
}

const checkNumDocumento = (valor, tipo) => {
    const stringValue = valor.toString()
    const lenValidation = stringValue.length >= 8 && stringValue.length <= 10
    const numberValidation = parseInt(valor) ? true : false
    // console.log(`len: ${lenValidation} num: ${numberValidation}`);
    // console.log(valor.length);
    // console.log(typeof valor);
    return lenValidation && numberValidation
} 

console.log(checkNumDocumento('dasda'))
console.log(checkNumDocumento(1234567))
console.log(checkNumDocumento(123456789))
console.log(checkNumDocumento(12345678))
console.log(checkNumDocumento(1234567890))
console.log(checkNumDocumento(1234567891011))

module.exports.checkContrasena = checkContrasena
module.exports.checkCorreo = checkCorreo
module.exports.checkNumDocumento = checkNumDocumento