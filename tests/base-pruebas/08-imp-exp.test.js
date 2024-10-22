/* eslint-disable no-undef */

import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroess from "../../src/data/heroes";

describe ('Pruebas en 08-imp-exp', ( ) => {
    test('getHeroeById debe retornar un heroe por Id', () => {

        const id = 1; 
        const hero = getHeroeById(id)

        expect(hero).toEqual({id:1, name: 'Batman', owner: 'DC'})
    })
    test('getHeroeById debe retornar undefined si no existe id', () => {

        const id = 100; 
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo de length 3 y heroes de dc', () => {

        const owner = "DC"
        const heroes = getHeroesByOwner(owner); 

        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(heroess.filter( (heroe) => heroe.owner === owner ))
    
        expect(heroes[0].name).toEqual('Batman')
        expect(heroes[1].name).toEqual('Superman')
        expect(heroes[2].name).toEqual('Flash')


    })
    test('getHeroesByOwner debe retornar un arreglo de length 2 y heroes de marvel', () => {

        const owner = "Marvel"
        const heroes = getHeroesByOwner(owner); 
        expect(heroes).toEqual(heroess.filter( (heroe) => heroe.owner === owner ))


        expect(heroes.length).toBe(2)
        expect(heroes[0].name).toEqual('Spiderman')
        expect(heroes[1].name).toEqual('Wolverine')


    })
}); 