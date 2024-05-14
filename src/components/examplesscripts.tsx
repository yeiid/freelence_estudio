// examplesscripts.js
import React from 'react';
import ExampleComponent from './example';

interface Example {
    examples :{}
}
const examples = [
  { code: "def say_hello(name):\n  print('Hello, ' + name)",
language: 'Python' },
  { code: "function greet(name) {\n  console.log(`Hi there,${name}!`);\n}", language: 'JavaScript',},
];

const ExamplePage = () => (
  <div>
    <h1>Ejemplos de código</h1>
    {examples.map(({ code, language }) => (
      <ExampleComponent key={code} code={code} />
    ))}
  </div>
);

export default ExamplePage;