import CodeBlock from "@/components/CodeBlock";
const HtmlComponet = ({title,example,description}:{title:string,example:string,description:string}) => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>
        {description}
      </p>
      <pre className="bg-gray-600 p-4 rounded-md">
        <CodeBlock Content={example} />
      </pre>
    </div>
  );
};

export default HtmlComponet;
