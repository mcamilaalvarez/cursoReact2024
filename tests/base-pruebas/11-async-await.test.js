/* eslint-disable no-undef */

import { getImagen } from "../../src/base-pruebas/11-async-await";

describe ('Pruebas en 11-async-await.js', () => {
    test ('get Imagen debe retornar un url de la imagen', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');

    });
    // test ('get Imagen debe retornar un error si no hay apikey', async () => {
    //     const resp = await getImagen();
    //     expect(resp).toBe('No se encontró la imagen');

    // });
})