import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { editActivityRequest, updateActivityRequest } from "../../api/apiActivities";
import { Activity } from "../../interfaces/activities.interface";
import EditProductForm from './EditProductForm';

const ActivityUpdate: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Captura el ID desde la URL
  const [product, setProduct] = useState<Activity | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await editActivityRequest(id as string);
        const data = await response.json();
        setProduct(data); // Establece el producto en el estado
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (updatedProduct: Activity) => {
    try {
      await updateActivityRequest(id as string, updatedProduct);
      // Redireccionar o mostrar un mensaje de éxito si es necesario
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return product ? (
    <EditProductForm product={product} onSubmit={handleUpdate} />
  ) : (
    <div>Cargando...</div>
  );
};

export default ActivityUpdate;
