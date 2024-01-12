import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  it('renders correctly the the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test title'>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('BodySection').exists()).toEqual(true);
    expect(wrapper.find('BodySection').prop('title')).toEqual('test title');
    expect(wrapper.find('BodySection').prop('children')).toEqual(<p>test children node</p>);
  });
});