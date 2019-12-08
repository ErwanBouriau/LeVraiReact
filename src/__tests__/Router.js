import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App"
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("redirects to home",  () => {

  act(() => {
    render(<BrowserRouter><App /></BrowserRouter>, container);
  });

//   expect(container.querySelector("[data-testid=btn-home]").innerHTML).toBe("Trouver l'amour");
expect(document.querySelector("button").textContent).toMatch("Trouver l'amour");

});
 
// it("does not display the title",  () => {

//   act(() => {
//     render(<MemoryRouter initialEntries={["/main"]} ><App /></MemoryRouter>, container);
//   });

// //   expect(container.querySelector("[data-testid=filter-title]").innerHTML).toBe("Filtres");
// expect(document.querySelector("h1").textContent).toMatch("Filtres");
// });