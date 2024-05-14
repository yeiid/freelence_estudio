// TsVariables.js

import React from 'react';

const TsVariables = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Variables en TypeScript</h3>
      <p>
        En TypeScript, puedes declarar variables con tipos específicos utilizando la sintaxis de dos puntos (<code>:</code>).
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`let nombre: string = "Juan";
let edad: number = 25;
const PI: number = 3.14;`}
      </pre>
    </div>
  );
};

export default TsVariables;
