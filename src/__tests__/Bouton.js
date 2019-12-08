import React from "react";
import {  render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Bouton from '../components/BoutonHome';

let container = null;

beforeEach( () => {
container = document.createElement("div");
document.body.appendChild(container);
});

afterEach( () => {
unmountComponentAtNode(container);
container.remove();
});

it('renders without crashing', () => {
    act( () => {
    render(<Bouton label="test"></Bouton>, container);
    });
    expect(document.querySelector("button").textContent).toMatch("test");
})