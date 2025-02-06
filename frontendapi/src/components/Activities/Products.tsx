import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"; 
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
  const [updateList, setUpdateList] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedProduct) {
      const updatedProduct = location.state.updatedProduct;
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product
        )
      );
    }
  }, [location.state]);

  useEffect(() => {
    setUpdateList(false);
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        console.log("datos recibidos:", data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [updateList]);

  const handleEdit = (id: string) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      console.log(`Eliminar producto con ID: ${id}`);
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProducts(products.filter((product) => product._id !== id));
        setUpdateList(true);
      } else {
        console.error('Error al eliminar el producto');
      }
    } catch (error) {
      console.error('Error en la solicitud de eliminación:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Nuestros Productos</h1>
        <a href="/ActivityForm">
          <button
            className="flex items-center justify-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Agregar producto
          </button>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 flex flex-col"
          >
            <div className="p-6 flex flex-col flex-grow">
              <h5 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                {product.producto}
              </h5>
              <p className="text-sm text-gray-500">Categoría: {product.categoria}</p>
              <p className="text-sm text-gray-500">Referencia: {product.referencia}</p>
              <p className="text-sm text-gray-500">Tamaño: {product.tamaño} {product.medida}</p>
              <p className="text-sm text-gray-500">Cantidad: {product.cantidad}</p>
              <p className="text-lg font-semibold text-gray-900 mt-4 mb-6">
                Precio: ${product.precio} unidad
              </p>
              <div className="flex justify-between items-center mt-auto">
                <button
                  onClick={() => handleEdit(product._id)}
                  className="flex items-center justify-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  <PencilIcon className="h-5 w-5" />
                  Editar
                </button>

                <button
                  className="flex items-center justify-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                  onClick={() => handleDelete(product._id)}
                >
                  <TrashIcon className="h-5 w-5 mr-1" />
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