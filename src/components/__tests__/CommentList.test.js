import React from "react";
import CommentList from "components/CommentList";
import { mount } from 'enzyme';
import Root from "Root";

let wrapped;

beforeEach(() => {
    const initialState = {
        comments : ['comment 1', 'comment 2']
    };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("displays one li per comment", () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows text for each comment', ()=>{
    expect(wrapped.render().text()).toContain('comment 1');
    expect(wrapped.render().text()).toContain('comment 2');
})
