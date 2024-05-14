// JsVariables.js

import React from 'react';

const JsVariables = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Variables</h3>
      <p>
        Las variables se utilizan para almacenar valores. En JavaScript, puedes declarar variables con la palabra clave <code>var</code>, <code>let</code>, o <code>const</code>.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`var nombre = "Juan";
let edad = 25;
const PI = 3.14;`}
      </pre>
    </div>
  );
};

export default JsVariables;
