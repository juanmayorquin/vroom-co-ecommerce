import React from 'react';
import { useState } from 'react';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const [successMessage, setSuccessMessage] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

  const productImageHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setProductImage(selected);
      setImageError(null);
    } else {
      setProductImage(null);
      setImageError('Por favor selecciona un formato válido de imagen.');
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log(productName, productDescription, productPrice, productImage);

    const db = getFirestore();
    const storage = getStorage();

    try {
      const storageRef = ref(storage, `product-images/${productImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, productImage);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          setImageError(error.message);
          setUploadProgress(null);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);


          const productsRef = collection(db, 'Products');
          await addDoc(productsRef, {
            name: productName,
            description: productDescription,
            price: Number(productPrice),
            image: downloadURL,
          });

          // Restablecer formulario
          setProductName('');
          setProductDescription('');
          setProductPrice('');
          setProductImage(null);
          document.getElementById('file-upload').value = '';
          setSuccessMessage('Producto añadido con éxito');
          setTimeout(() => {
            setSuccessMessage(null);
            setUploadProgress(null);
          }, 3000);
        }
      );
    } catch (error) {
      console.error('Error al subir el producto:', error);
      setImageError('Ha ocurrido un error al subir el producto');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-neutral-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Añadir producto</h2>
        <form autoComplete='off' className="space-y-4">
          <input
            required
            className="w-full p-3 rounded-md bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            type="text"
            placeholder="Nombre del producto"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <textarea
            className="w-full p-3 rounded-md bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Descripción del producto"
            onChange={(e) => setProductDescription(e.target.value)}
            value={productDescription}
          ></textarea>
          <input
            required
            className="w-full p-3 rounded-md bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            type="number"
            placeholder="Precio del producto"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />

          <div className="w-full">
            <label
              htmlFor="file-upload"
              className="w-full p-3 font-semibold text-white bg-red-600 rounded-md hover:bg-[#f20b0b] transition-all cursor-pointer block text-center"
            >
              Seleccionar imagen del producto
            </label>
            <input
              required
              id="file-upload"
              type="file"
              className="hidden"
              onChange={productImageHandler}
            />
            {productImage && (
              <p className="mt-2 text-sm text-gray-300">
                Archivo seleccionado: {productImage.name}
              </p>
            )}
            {successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
            {imageError && <p className="mt-2 text-sm text-red-600">{imageError}</p>}
            {uploadProgress !== null && (
              <p className="mt-2 text-sm text-yellow-500">Progreso de subida: {uploadProgress}%</p>
            )}
          </div>

          <button className="w-full p-3 font-semibold text-white bg-red-600 rounded-md hover:bg-[#f20b0b] transition-all" onClick={handleAddProduct}>
            Añadir producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
