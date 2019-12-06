import React from 'react';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import EspeceListe from "./components/EspeceListe.js";

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

it('renders with cards', async () => {

  const fakePerso = {
                    name: "Anakin Skywalker",
                    race: "Human"
  }

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePerso)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<EspeceListe />, container);
  });

  expect(container.querySelector("[data-testid=race]").textContent).toBe("Human");

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
