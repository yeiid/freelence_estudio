// TsInterfaces.js

import React from 'react';

const TsInterfaces = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Interfaces en TypeScript</h3>
      <p>
        Las interfaces en TypeScript te permiten definir la forma de un objeto. Puedes utilizarlas para garantizar que los objetos cumplan con una estructura específica.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        {`interface Persona {
  nombre: string;
  edad: number;
}

let persona: Persona = {
  nombre: "Ana",
  edad: 30
};`}
      </pre>
    </div>
  );
};

export default TsInterfaces;
