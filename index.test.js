const validRut = require("./index");

test('Se espera que la longitud del rut sea válido', ()=>{
    expect(carnet(111111111)).toBe('Es válido')
})


// console.log(sumar(2,5));

