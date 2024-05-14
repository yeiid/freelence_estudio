// PythonVariables.js

import React from 'react';

const PythonVariables = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Variables en Python</h3>
      <p>
        En Python, puedes asignar valores a variables sin especificar un tipo de datos.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`nombre = "Juan"
edad = 25
pi = 3.14`}
      </pre>
    </div>
  );
};

export default PythonVariables;
