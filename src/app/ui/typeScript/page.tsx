
import SectionComponet from "@/components/SectionComponet"
import { Dat } from "@/data/example";
const TypeScriptBasics = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white box">
      <h2 className="text-3xl font-semibold mb-4">Fundamentos de TypeScript</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          TypeScript es un superset de JavaScript que agrega tipos estáticos opcionales. Aquí tienes algunos conceptos básicos:
        </p>
      </div>
      <SectionComponet
        title={Dat.TS.Basics.title}
        example={Dat.TS.content.example1.Basics}
        description={Dat.TS.Basics.description}
      />
      <SectionComponet
        title={Dat.TS.Interfaces.title}
        example={Dat.TS.content.example1.Interfaces}
        description={Dat.TS.Interfaces.description}
      />
      <SectionComponet
        title={Dat.TS.Generics.title}
        example={Dat.TS.content.example1.Generics}
        description={Dat.TS.Generics.description}
      />

    </div>
  );
};

export default TypeScriptBasics;
