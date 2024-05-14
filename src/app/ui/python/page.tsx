// PythonBasics.js

import React from 'react';
import PythonVariables from './PythonVariables';
import PythonFunctions from './PythonFunctions';
import PythonLists from './PythonLists';
import PythonDictionaries from './PythonDictionaries';

const PythonBasics = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white box">
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
