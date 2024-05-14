// PythonFunctions.js

import React from 'react';

const PythonFunctions = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Funciones en Python</h3>
      <p>
        En Python, puedes definir funciones con la palabra clave <code>def</code>.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`def saludar(nombre):
    return "Hola, " + nombre + "!"

resultado = saludar("Miguel")`}
      </pre>
    </div>
  );
};

export default PythonFunctions;
