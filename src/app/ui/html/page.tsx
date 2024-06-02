import HtmlComponet from "../../../components/SectionComponet";
import { Dat } from "@/data/example";

const HtmlIntroduction = () => {
  return (
    <div className="  bg-gradient-to-r from-blue-500 to-purple-600 text-white box">
      <h2 className="text-3xl font-semibold mb-4">Introducción a HTML</h2>
      <div className="mb-6">
        <p className="text-gray-700">
          HTML (HyperText Markup Language) es el lenguaje utilizado para
          estructurar el contenido en la web. Aquí tienes una visión general de
          algunos conceptos básicos de HTML:
        </p>
      </div>
      <HtmlComponet
        title={Dat.HTML.BasicStructure.title}
        example={Dat.HTML.content.example1.BasicStructure}
        description={Dat.HTML.BasicStructure.description}
      />
      <HtmlComponet
        title={Dat.HTML.form.title}
        example={Dat.HTML.content.example1.form}
        description={Dat.HTML.form.description}
      />
      <HtmlComponet
        title={Dat.HTML.Img.title}
        example={Dat.HTML.content.example1.Img}
        description={Dat.HTML.Img.description}
      />
      <HtmlComponet
        title={Dat.HTML.Lists.title}
        example={Dat.HTML.content.example1.Lists}
        description={Dat.HTML.Lists.description}
      />
      <HtmlComponet
        title={Dat.HTML.TextTags.title}
        example={Dat.HTML.content.example1.TextTags}
        description={Dat.HTML.TextTags.description}
      />
    </div>
  );
};

export default HtmlIntroduction;
