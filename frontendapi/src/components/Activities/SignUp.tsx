import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    edad: "",
    rol: "",
    contraseña: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convertir 'edad' a número antes de enviarlo
    const dataToSend = {
      ...formData,
      edad: Number(formData.edad), // Asegurarse de que 'edad' es un número
    };

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }

      // Redirigir a la página de login después de registrarse
      navigate("/login");
    } catch (error) {
      console.error("Error al registrarse: ", error.message);
      alert(error.message || "Error en el registro, intente nuevamente.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-center text-2xl font-bold mb-4">Registrar Cuenta</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          />
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            required
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            required
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          />
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            placeholder="Edad"
            required
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          />
          <input
            type="text"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            placeholder="Rol"
            required
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          />
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            placeholder="Contraseña"
            required
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          />
          <div className="flex justify-center mt-6">
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
