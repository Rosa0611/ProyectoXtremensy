import React, { useState } from 'react';
import { Activity } from "../../interfaces/activities.interface";

interface EditProductFormProps {
  product: Activity;
  onSubmit: (updatedProduct: Activity) => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, onSubmit }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    setUpdatedProduct({
      ...updatedProduct,
      // Si el input es de tipo number, convertimos el valor a Number, de lo contrario dejamos el string
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(updatedProduct);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-black">Nombre del producto:</label>
          <input
            type="text"
            name="producto"
            value={updatedProduct.producto}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={updatedProduct.categoria}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Referencia:</label>
          <input
            type="number"
            name="referencia"
            value={updatedProduct.referencia}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Tamaño:</label>
          <input
            type="number"
            name="tamaño"
            value={updatedProduct.tamaño}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Medida:</label>
          <input
            type="text"
            name="medida"
            value={updatedProduct.medida}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Cantidad:</label>
          <input
            type="number"
            name="cantidad"
            value={updatedProduct.cantidad}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Precio:</label>
          <input
            type="number"
            name="precio"
            value={updatedProduct.precio}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Total:</label>
          <input
            type="number"
            name="total"
            value={updatedProduct.total}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Guardar cambios
      </button>
    </form>
  );
};

export default EditProductForm;
