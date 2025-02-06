import React, { useEffect, useState } from 'react';
import { deleteActivityRequest, editActivityRequest } from "../../api/apiActivities"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

type Product = {
  _id: string;
  categoria: string;
  producto: string;
  referencia: number;
  tamaño: number;
  medida: string;
  cantidad: number;
  precio: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [ updateList, setUpdateList ] = useState(false);

  useEffect(() => {
    setUpdateList(false);
    const fetchActivities = async () => {
      fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => {
        console.log("datos recibidos:",data);
        setProducts(data)})
      .catch((error) => console.error('Error fetching products:', error));
    }
    fetchActivities();
  }, [updateList]);


  const handleEdit = async (id: string) => {
    try {
    console.log('Editar actividad con ID:', id);
    await editActivityRequest(id);
  } catch (error) {
    console.log(error);
  }
  }
    

  const handleDelete = async (id: string) => {
    try {
      console.log (`Eliminar actividad con ID: ${id}`);
      await deleteActivityRequest(id);
      setProducts(products.filter((product) => product._id !== id));
      setUpdateList(true);
    } catch (error) {
      console.log(error);
    }
}

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Nuestros Productos</h1>
        <a href="/ActivityForm">
          <button
            className="flex items-center justify-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            Agregar producto
          </button>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 flex flex-col"
          >
            <div className="p-6 flex flex-col flex-grow">
              <h5 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {product.producto}
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Categoría: {product.categoria}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Referencia: {product.referencia}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tamaño: {product.tamaño} {product.medida}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cantidad: {product.cantidad}
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-6">
                Precio: ${product.precio} unidad
              </p>
              <div className="flex justify-between items-center mt-6 mt-auto">
              <button
                onClick={() => handleEdit(product._id)}
                className="flex items-center justify-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
>
                <PencilIcon className="h-5 w-5" />
                Editar
              </button>

                <button
                  className=" flex items-center justify-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
                  onClick={(() => handleDelete(product._id))}
                >
                  <TrashIcon className="h-5 w-5 mr-1 " />
                  Eliminar
                </button>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Products;

