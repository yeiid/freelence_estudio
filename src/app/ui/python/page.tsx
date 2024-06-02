import HtmlComponet from "../../../components/SectionComponet";
import { Dat } from "@/data/example";
const PythonBasics = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white box">
      <h2 className="text-3xl font-semibold mb-4">Fundamentos de Python</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          Python es un lenguaje de programación versátil y fácil de aprender. Aquí tienes algunos conceptos básicos:
        </p>
      </div>
      <HtmlComponet
        title={Dat.PYTHON.Basics.title}
        example={Dat.PYTHON.content.example1.Basics}
        description={Dat.PYTHON.Basics.description}
      />
      <HtmlComponet
        title={Dat.PYTHON.Functions.title}
        example={Dat.PYTHON.content.example1.Functions}
        description={Dat.PYTHON.Functions.description}
      />
      <HtmlComponet
        title={Dat.PYTHON.Classes.title}
        example={Dat.PYTHON.content.example1.Classes}
        description={Dat.PYTHON.Classes.description}
      />
    </div>
  );
};

export default PythonBasics;
