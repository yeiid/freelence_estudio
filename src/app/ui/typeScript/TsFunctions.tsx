// TsFunctions.js

import React from 'react';

const TsFunctions = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Funciones en TypeScript</h3>
      <p>
        En TypeScript, puedes añadir tipos a los parámetros y al valor de retorno de las funciones.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        {`function saludar(nombre: string): string {
          return "Hola, " + nombre + "!";
  }   let resultado: string = saludar("Miguel");`}
      </pre>
    </div>
  );
};

export default TsFunctions;
