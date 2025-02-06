
const Conta = () => {
    return (
    <div className="bg-gray-900 text-white p-6">
        <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Nuestro Equipo de Trabajo</h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
            Conoce a nuestro increíble equipo de trabajo.
        </p>
            <div className="flex space-x-12 mt-8 text-center">
            {[
            { src: "src/assets/Equipo/1.jpeg", name: "Ruben Alejandro Diaz Cardenas", role: "CEO", age: "25 años" },
            { src: "src/assets/Equipo/2.jpg", name: "Rosa Isabel Rosero Cartagena", role: "CTO", age: "25 años" },
            { src: "src/assets/Equipo/3.jpeg", name: "Carlos Andres Viveros", role: "Diseñador", age: "25 años" },
            { src: "src/assets/Equipo/5.jpg", name: "Ian Andres Abadia Alba", role: "Desarrolladora", age: "25 año" },
            { src: "src/assets/Equipo/4.jpg", name: "Ana Paula Valencia", role: "Marketing", age: "25 años" },
            ].map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={member.src} alt={member.name} className="w-32 h-32 rounded-full object-cover" />
                    <p className="mt-2 text-lg font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-400">{member.role}</p>
                    <p className="text-sm text-gray-400">{member.age}</p>
                </div>
            ))}
            </div>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-15">
        <h1 className="text-4xl font-bold mb-2">Contáctanos</h1>
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                Nombre
                </label>
                <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
                Correo Electrónico
                </label>
                <input
                type="email"
                id="email"
                placeholder="tuemail@example.com"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="message">
                Mensaje
                </label>
                <textarea
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-white hover:bg-red-700 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                Enviar
            </button>
        </form>
    </div>
</div>
);
};

export default Conta;