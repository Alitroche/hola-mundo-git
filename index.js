let nombre ="Juan Perez";
let edad = 25;
console.log("Hola " + nombre);
console.log(nombre + " tiene "+ edad +" años");

function calcularEdad(anioNacimiento){
    const fechaActual = new Date();
    const anioActual = anioActual.getFullYear();
    const edad = anioActual - anioNacimiento;
    return edad;
}