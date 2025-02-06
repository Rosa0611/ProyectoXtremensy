import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/Logo.png"; // Importa el logo

function HeaderApp() {
const [isOpen, setIsOpen] = useState(false);

return (
    <header className="flex items-center justify-between bg-red-700 p-4 text-white">
      {/* Logo */}
    <div className="flex items-center gap-2">
        <img src={logo} alt="MyCompany" className="h-15 w-30" />
    </div>

      {/* Menú de usuario */}
    <div className="relative">
        {/* Botón para abrir/cerrar menú */}
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-full hover:bg-indigo-600 focus:outline-none"
        >
        <UserCircleIcon className="h-8 w-8 text-white" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden">
            <a
            href="/perfil"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
            >
            Mi Perfil
            </a>
            <button
            onClick={() => alert("Cerrando sesión...")}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-200"
            >
            Cerrar sesión
            </button>
        </div>
        )}
    </div>
    </header>
);
}

export default HeaderApp;
