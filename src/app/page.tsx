import Link from "next/link";

export default function Page() {
  return (

<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6">¡Bienvenido a Cursos YEIIDH!</h1>
      <p className="text-xl mb-8">Tu destino para aprender y crecer.</p>
      
      <button className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-blue-400 hover:text-white transition duration-300">
      <Link href="/ui">Explorar Cursos</Link>
      </button>
    </div>
  );
}
