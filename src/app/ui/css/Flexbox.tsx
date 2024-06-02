import CodeBlock from "@/components/CodeBlock";
import { Dat } from "@/data/example";
const Flexbox = () => {
  const example = Dat.CSS.content.example1.Flexbox

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Flexbox</h3>
      <p>
        Flexbox es un modelo de diseño que permite diseñar diseños complejos y alineaciones con facilidad.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
      <CodeBlock Content={example}/>
      </pre>
    </div>
  );
};

export default Flexbox;
