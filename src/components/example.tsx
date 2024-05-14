"use client"
import { useState, useEffect } from 'react';

const ExampleComponent = ({ code }:{code:string}) => {
  const [isPrinting, setIsPrinting] = useState(false);

  function handlePrint() {
    window.print();
    setIsPrinting(false);
  const printJS = `function () { var prtStr =
document.createDocumentFragment(); ... };`;

    if (typeof window !== 'undefined' && typeof window.print ===
'function') {
      eval(printJS);
      window.print();
    } else {
      alert('La impresión no está disponible en estenavegador');
    }
  }

  return (
    <div>
      <pre>{code}</pre>
      <button onClick={handlePrint}>Imprimir ejemplo</button>
    </div>
  );
};

export default ExampleComponent;