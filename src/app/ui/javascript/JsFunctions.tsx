// JsFunctions.js

import React from 'react';

const JsFunctions = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Funciones</h3>
      <p>
        Las funciones son bloques de código reutilizables. Puedes declarar funciones con la palabra clave <code>function</code>.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

let resultado = saludar("Miguel");`}
      </pre>
    </div>
  );
};

export default JsFunctions;
