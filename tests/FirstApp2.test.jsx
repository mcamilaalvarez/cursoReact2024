/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe ('Pruebas en <FirstApp/>', () => {
    const title= "Hola, soy Camila";
    const subtitle = "Soy un subtitulo"

    test ('Debe de hacer match con el snapshot', ()  => {
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });
    test ('Debe mostrar el mensaje "Hola, soy Camila"', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
    test('Debe de mostrar el titulo en un h1' , () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading', {level:1}).innerHTML ).toContain(title)
    })
    test('Debe de mostrar el subtitulo enviado por props' , () => {
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect(screen.getByText(subtitle)).toBeTruthy()
    })
})