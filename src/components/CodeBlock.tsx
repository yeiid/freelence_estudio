"use client"
type CodeExampleProps = {
  Content: string;
};

const CodeBlock: React.FC<CodeExampleProps> = ({ Content }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(Content)
      .then(() => {
        alert('Código copiado al portapapeles!');
      })
      .catch(err => {
        console.error('Error al copiar el código: ', err);
      });
  };

  return (
    <div className="relative p-4 bg-gray-600 border border-gray-300 rounded-md font-mono overflow-auto">
      <button
        className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
        onClick={handleCopy}
      >
        Copiar
      </button>
      <pre className="whitespace-pre-wrap">{Content}</pre>
    </div>
  );
};

export default CodeBlock;
