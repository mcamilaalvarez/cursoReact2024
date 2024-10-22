/* eslint-disable no-unused-vars */
import { getSaludo } from "../../src/base-pruebas/02-template-string";

/* eslint-disable no-undef */
describe('Pruebas en 02-template-string', ()=> {
    test('getSaludo debe retornar "Hola Camila"', ()=> {
        const name = 'Camila';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    })
})