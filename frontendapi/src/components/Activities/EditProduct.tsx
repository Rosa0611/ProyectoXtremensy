import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
    total: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error("Error al obtener el producto: ", error));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convertir los campos numéricos a number antes de enviar
    const productConverted = {
      ...product,
      referencia: Number(product.referencia),
      tamaño: Number(product.tamaño),
      cantidad: Number(product.cantidad),
      precio: Number(product.precio),
      total: Number(product.total),
    };

    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productConverted),
      });

      if (!response.ok) throw new Error("Error al actualizar el producto");
      const data = await response.json();
      console.log("Producto actualizado: ", data);
      navigate("/Productos", { state: { updatedProduct: data } });
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
          <input
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white"
            name="total"
            value={product.total}
            onChange={handleChange}
            placeholder="Total"
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
