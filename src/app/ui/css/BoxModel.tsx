import CodeBlock from '@/components/CodeBlock';

import {Dat} from '@/data/example';

const BoxModel = () => {
  const example = Dat.CSS.content.example1.BoxModel
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Box Model</h3>
      <p>
        El modelo de caja es fundamental en CSS y describe cómo se representan los elementos en la página. Incluye el contenido, el padding, el borde y el margen.
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        <CodeBlock Content={example}/>
      </pre>
    </div>
  );
};

export default BoxModel;
