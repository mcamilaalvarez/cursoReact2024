import { usContext } from "../../src/base-pruebas/06-deses-obj";

/* eslint-disable no-undef */
describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe retornar un objeto', ()=> {

        const testUser = {
            nombreClave: 'Celestina',
            anios: 23,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const clave = 'Celestina';
        const edad = 23;
        const user = usContext({clave,edad});

        expect(testUser).toStrictEqual(user);
    });

    
})