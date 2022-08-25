let nombre ="Juan Perez";
let edad = calcularEdad(2002);
console.log("Hola " + nombre);
console.log(nombre + " tiene "+ edad +" años");
console.log("Se le pagara: "+calularSalario(8,30000));

function calcularEdad(anioNacimiento){
    return new Date().getFullYear() - anioNacimiento;
}

function calularSalario(horasTrabajadas, montoPorhora){
    return horasTrabajadas * montoPorhora;
}