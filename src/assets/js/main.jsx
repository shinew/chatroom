// @flow

const React = require('react');
const ReactDOM = require('react-dom');

function foo(a: number): number {
  return 3;
}

ReactDOM.render(
  <h1>Hello, world!{foo(3)}</h1>,
  document.getElementById('react')
);
