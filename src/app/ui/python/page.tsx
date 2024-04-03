// PythonBasics.js

import React from 'react';
import PythonVariables from './PythonVariables';
import PythonFunctions from './PythonFunctions';
import PythonLists from './PythonLists';
import PythonDictionaries from './PythonDictionaries';

const PythonBasics = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold mb-4">Fundamentos de Python</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          Python es un lenguaje de programación versátil y fácil de aprender. Aquí tienes algunos conceptos básicos:
        </p>
      </div>
      <PythonVariables />
      <PythonFunctions />
      <PythonLists />
      <PythonDictionaries />
    </div>
  );
};

export default PythonBasics;
