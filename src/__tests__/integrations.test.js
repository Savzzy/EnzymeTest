import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "fetch 1" }, { name: "fetch 2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the fetchcomments button and click it

  wrapped.find(".fetch-comments").simulate("click");

  //introduce pause after click event and before jest expects "li" element
  //   setTimeout(()=>{
  //       wrapped.update();
  //     expect(wrapped.find("li").length).toEqual(2);
  //     done();
  //     wrapped.unmount();
  //   },100)
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });

  //Expect to find a list of comments
});
