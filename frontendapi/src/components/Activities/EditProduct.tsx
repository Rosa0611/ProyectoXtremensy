import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    producto: "",
    categoria: "",
    referencia: "",
    tamaño: "",
    medida: "",
    cantidad: "",
    precio: "",
  });

  // Obtener el producto a editar
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error al obtener el producto: ", error));
  }, [id]);

  // Manejador para cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Manejador para el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Realizamos la petición PUT para guardar el producto actualizado
      const response = await axios.put(`http://localhost:3000/api/products/${id}`, product);

      // Verificar respuesta del servidor
      console.log('Producto actualizado: ', response.data);

      // Redirigir a la lista de productos después de que se guarden los cambios
      navigate("/Productos", { state: { updatedProduct: response.data } });
    } catch (error) {
      console.error("Hubo un error al guardar los cambios: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Editar Producto</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
            name="producto"
            value={product.producto}
            onChange={handleChange}
            placeholder="Nombre del producto"
            required
          />
          <input
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
            name="categoria"
            value={product.categoria}
            onChange={handleChange}
            placeholder="Categoría"
            required
          />
          <input
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
            name="referencia"
            value={product.referencia}
            onChange={handleChange}
            placeholder="Referencia"
            required
          />
          <input
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
            name="tamaño"
            value={product.tamaño}
            onChange={handleChange}
            placeholder="Tamaño"
            required
          />
          <input
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
            name="medida"
            value={product.medida}
            onChange={handleChange}
            placeholder="Medida"
            required
          />
          <input
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
            name="cantidad"
            value={product.cantidad}
            onChange={handleChange}
            placeholder="Cantidad"
            required
          />
          <input
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
            name="precio"
            value={product.precio}
            onChange={handleChange}
            placeholder="Precio"
            required
          />

          <div className="col-span-2 flex justify-center mt-6">
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
