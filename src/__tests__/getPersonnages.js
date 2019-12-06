import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Match from "../components/Match";

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

it("test API", async () => {
  const profile = {
    results: [{
        name: "Luke Skywalker",
        gender: "male",
        homeworld: "https://swapi.co/api/planets/1/"
    }]
  };

  const location = {
    name: "terre"
  }

  function fakeFetch(url) {
    console.log(url);
    
    let fakedata = (url.includes("people") ? profile : location);

    return Promise.resolve({
      json: () => Promise.resolve(fakedata)
    })
  }

  jest.spyOn(global, "fetch").mockImplementation(fakeFetch);

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Match />, container);
  });

  expect(container.querySelector("[data-testid=name]").textContent).toBe("Luke Skywalker");

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});