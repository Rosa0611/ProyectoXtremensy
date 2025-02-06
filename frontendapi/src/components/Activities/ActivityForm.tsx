import { useState, ChangeEvent, FormEvent } from "react";
import { createActivityRequest } from "../../api/apiActivities";
import { Activity } from "../../interfaces/activities.interface";

function ActivityForm() {
    const [activity, setActivity] = useState<Activity>({
        producto: "",
        categoria: "",
        referencia: 0,
        tamaño: 0,
        cantidad: 0,
        precio: 0,
        total: 0,
        medida: "",
        status: false,
    });

    // Función para manejar cambios en los inputs
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        // Campos que deben ser números
        const numericFields = ["referencia", "tamaño", "cantidad", "precio", "total"];

        // Si el campo es numérico, convierte el valor a número
        const newValue = numericFields.includes(name) ? Number(value) : value;

        setActivity({
            ...activity,
            [name]: newValue,
        });
    };

    // Función para validar los campos numéricos
    const validateActivity = (activity: Activity): boolean => {
        const numericFields = ["referencia", "tamaño", "cantidad", "precio", "total"];

        for (const field of numericFields) {
            if (isNaN(activity[field as keyof Activity] as number)) {
                console.error(`El campo ${field} no es un número válido`);
                return false;
            }
        }

        return true;
    };

    // Función para enviar el formulario
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validar los campos numéricos antes de enviar
        if (!validateActivity(activity)) {
            console.error("Datos inválidos. Por favor, revisa los campos numéricos.");
            return;
        }

        console.log("Datos a enviar:", activity);

        try {
            const res = await createActivityRequest(activity);
            const data = await res.json();
            console.log("Respuesta del servidor:", data);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    return (
        <div className="relative bg-white h-screen flex items-center justify-start p-10 overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden">
                <div className="absolute bg-red-800 top-0 right-0 h-full w-[calc(100%+1cm)] transform skew-x-[-15deg] origin-bottom-right"></div>
                <div className="absolute top-0 right-0 h-full w-full bg-black-600 transform skew-x-[-15deg] origin-bottom-right">
                    <img
                        src="src/assets/labios2.jpg"
                        alt="Imagen decorativa"
                        className="absolute top-0 right-0 w-full h-full object-cover opacity-100"
                    />
                </div>
            </div>

            {/* Formulario */}
            <div className="relative z-10 bg-red-800 text-white p-6 w-1/3 rounded-lg shadow-lg">
                <h1 className="text-center font-bold text-3xl my-4">Registro de productos</h1>
                <form onSubmit={submitForm} className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="producto"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-white text-black block w-full"
                        placeholder="Nombre del producto"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="categoria"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-white text-black block w-full"
                        placeholder="Categoría"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="referencia"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-white text-black block w-full"
                        placeholder="No. de Referencia"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="tamaño"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-white text-black block w-full"
                        placeholder="Tamaño"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="medida"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-white text-black block w-full"
                        placeholder="Medida"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="cantidad"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-white text-black block w-full"
                        placeholder="Cantidad"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="precio"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-white text-black block w-full"
                        placeholder="Precio"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="total"
                        className="border-2 border-gray-700 p-2 rounded-lg bg-white text-black block w-full"
                        placeholder="Total"
                        onChange={handleChange}
                    />

                    {/* Checkbox y botón en una fila */}
                    <label htmlFor="" className="inline-flex items-center gap-x-2">
                        <input
                            type="checkbox"
                            name="status"
                            className="h-5 w-5 text-indigo-600"
                            onChange={(e) => setActivity({ ...activity, status: e.target.checked })}
                        />
                        <span>Ejecutado</span>
                    </label>

                    <button className="bg-indigo-500 px-4 py-2 rounded-lg w-full col-span-2 hover:bg-indigo-600">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ActivityForm;





