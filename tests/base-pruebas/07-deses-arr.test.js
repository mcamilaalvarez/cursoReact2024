import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"
/* eslint-disable no-undef */

describe('Pruebas en 07-deses-arr', () => {

    test('Debe retornar un string y un número', ()=> {

        const [letters, numbers] = retornaArreglo(); 
        
        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)

        expect (letters).toStrictEqual(expect.any(String));
        // expect (numbers).toStrictEqual(expect.any(Number));
    })
})