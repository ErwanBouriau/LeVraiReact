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

it("renders with fake words", async () => {
  const profile = {
    results: [{
        name: "Luke Skywalker",
        gender: "male"
  }]
};
    const location = {
        name: "terre"
    }

  jest.spyOn(global, "fetch").mockImplementation((url) =>
  {
    let fakeData;  
    console.log(url);
    if (url.includes("people")) {
          fakeData = profile
      } else {
          
          fakeData = location;
      }

    return Promise.resolve({
      json: () => Promise.resolve(profile)
    })
}
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Match />, container);
  });

  expect(container.querySelector("[data-testid=name]").textContent).toBe("Luke Skywalker");

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});