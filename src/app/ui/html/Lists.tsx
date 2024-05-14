// Lists.js

import React from 'react';

const Lists = () => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Listas</h3>
      <p>
        Puedes utilizar listas ordenadas y no ordenadas para organizar información:
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        {`<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>

<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ol>`}
      </pre>
    </div>
  );
};

export default Lists;
