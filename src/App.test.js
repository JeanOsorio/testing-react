import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import App from './App';

describe('test', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
    unmountComponentAtNode(div);
  });

  it('should click the button', () => {
    act(() => {
      render(<App />, container);
    });

    act(() => {
      container
        .querySelector('button')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    let element = document.getElementById('saludo');
    expect(element.innerHTML).toBe('hola');

    act(() => {
      container
        .querySelector('button')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    element = document.getElementById('saludo');
    expect(element).toBeNull();

    act(() => {
      container
        .querySelector('button')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    element = document.getElementById('saludo');
    expect(element.innerHTML).toBe('hola');
  });

  it('should click the button', () => {
    act(() => {
      render(<App />, container);
    });

    const button = container.querySelector('button');
    act(() => {
      Simulate.click(button);
    });

    let element = document.getElementById('saludo');
    expect(element.innerHTML).toBe('hola');

    act(() => {
      Simulate.click(button);
    });

    element = document.getElementById('saludo');
    expect(element).toBeNull();
  });
});
