import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { MemoryRouter, useHistory } from 'react-router-dom';
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
    jest.clearAllMocks();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div
    );
    unmountComponentAtNode(div);
  });

  it('should click the button', () => {
    act(() => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
        container
      );
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

  it('various test', () => {
    act(() => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
        container
      );
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
    let selector = document.getElementById('selector');
    expect(selector.value).toBe('value2');

    selector.value = 'value3';
    Simulate.change(selector);

    expect(selector.value).toBe('value3');
  });
});
