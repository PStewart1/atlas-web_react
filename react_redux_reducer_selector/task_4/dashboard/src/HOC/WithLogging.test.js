import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  it('console.log called on mount and unmount', () => {
    const spy = jest.spyOn(console, 'log');
    const WrappedTestComp = WithLogging(() => <p />)
    const wrapper = shallow(<WrappedTestComp />);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('correctly logs component name', () => {
    const spy = jest.spyOn(console, 'log');
    const Login = () => <p>test</p>;
    const WrappedTestComp = WithLogging(Login);
    const wrapper = shallow(<WrappedTestComp />);
    expect(spy).toHaveBeenCalledWith('Component Login is mounted');
    spy.mockRestore();
  });
});
