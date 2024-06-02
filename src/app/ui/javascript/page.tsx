import SectionComponet from "@/components/SectionComponet";
import { Dat } from "@/data/example";

const JavaScriptBasics = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white box">
      <h2 className="text-3xl font-semibold mb-4">Fundamentos de JavaScript</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          JavaScript es un lenguaje de programación que se utiliza para hacer
          que las páginas web sean interactivas. Aquí tienes algunos conceptos
          básicos:
        </p>
      </div>
      <SectionComponet
        title={Dat.JS.Arrays.title}
        example={Dat.JS.content.example1.JsVariables}
        description={Dat.JS.Arrays.description}
      />
      <SectionComponet
        title={Dat.JS.Functions.title}
        example={Dat.JS.content.example1.JsFunctions}
        description={Dat.JS.Functions.description}
      />
      <SectionComponet
        title={Dat.JS.Objects.title}
        example={Dat.JS.content.example1.JsObjects}
        description={Dat.JS.Objects.description}
      />
      {/* <SectionComponet
        title={Dat.HTML.Lists.title}
        example={Dat.HTML.content.example1.Lists}
        description={Dat.HTML.Lists.description}
      />
      <HtmlComponet
        title={Dat.HTML.TextTags.title}
        example={Dat.HTML.content.example1.TextTags}
        description={Dat.HTML.TextTags.description}
      /> */}
    </div>
  );
};

export default JavaScriptBasics;
