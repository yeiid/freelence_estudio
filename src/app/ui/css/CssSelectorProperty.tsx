import CodeBlock from "@/components/CodeBlock";
import { Dat } from "@/data/example";
const CssSelectorProperty = () => {
  const example = Dat.CSS.content.example1.CssSelectorProperty

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Selector y Propiedad</h3>
      <p>
        En CSS, seleccionas elementos HTML y aplicas estilos utilizando
        propiedades. El siguiente ejemplo cambia el color de fondo de todos los
        elementos con la clase mi-elemento.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
      <CodeBlock Content={example}/>
      </pre>
    </div>
  );
};

export default CssSelectorProperty;
