// - La fecha de hoy

const fecha = new Date()
console.log(fecha)

//- La fecha de tu nacimiento

const nacimiento = new Date(1990, 02, 20, 11)
console.log(nacimiento)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const fecha2 = (fecha > nacimiento)
if (fecha2 === true){
    console.log(`${fecha} es mas tarde que ${nacimiento}`)
} else{
    console.log(`${nacimiento} es mas tarde que ${fecha}`)
}

// - Una variable que contenga el día de tu nacimiento

const nacimiento2 = nacimiento.getDate()
console.log(nacimiento2);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const nacimiento3 = (nacimiento.getMonth () + 1)
console.log(nacimiento3);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const nacimiento4 = nacimiento.getFullYear()
console.log(nacimiento4);
