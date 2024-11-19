import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Producto from '../../../components/producto';

const PaginaProductos = () => {
    const [products, setProducts] = useState([]);

    // Función para obtener los productos
    const getProducts = async () => {
        const db = getFirestore(); // Inicializar Firestore
        const querySnapshot = await getDocs(collection(db, 'Products')); // Obtener documentos de la colección
        const productsData = querySnapshot.docs.map(doc => ({
            id: doc.id, // Incluye el ID del documento
            ...doc.data() // Incluye los datos del documento
        }));
        setProducts(productsData);
    };

    // Llamar a la función `getProducts` al montar el componente
    useEffect(() => {
        getProducts();
        console.log(products);
    }, []);

    return (
        <section className='pt-20 pb-10 w-5/6 md:max-w-7xl m-auto flex justify-center items-center'>
            <div className='grid place-items-center'>
                <h1 className='text-2xl font-bold mb-4'>Nuestros productos</h1>
                <div className='flex flex-wrap gap-4'>
                    {products.map(product => (
                        
                            <Producto
                                key={product.id}
                                img={product.image}
                                name={product.name}
                                descripcion={product.descripcion}
                                price={product.price}
                            />
                        
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaginaProductos;
