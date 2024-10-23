import React from "react";
import ReactDOM  from "react-dom/client";
//import {HelloWorldApp} from './HelloWorldApp'
import { FirstApp } from "./FirstApp";
import "./styles.css";
import { CounterApp } from "./CounterApp";
// {createRoot}

// const root = createRoot(document.getElementById('root'));

 ReactDOM.createRoot (document.getElementById('root')).render(
     <React.StrictMode>
        {/* <FirstApp title="Hola, soy Camila" /> */}
        <CounterApp value={100}/>
        {/* <HelloWorldApp/> */}
     </React.StrictMode>
 )

// const saludo = <h1>Hola Mundo uu</h1>
// const divRoot = document.querySelector('#root')
// const root = createRoot(divRoot)
// root.render(saludo);