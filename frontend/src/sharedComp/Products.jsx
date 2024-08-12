import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/slices/cartSlice';
import { fetchProducts, STATUES } from '../redux/slices/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import CircleImages from './CircleImages';
import Navbar from './Navbar';

const Products = () => {
    const dispatch = useDispatch();
    const { products, status } = useSelector((state) => state.product);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleClick = (data) => {
        dispatch(add(data));
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.productCategory === selectedCategory)
        : products;

    if (status === STATUES.LOADING) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <FontAwesomeIcon icon={faSpinner} spin size="3x" className='text-blue-800' />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <CircleImages onCategorySelect={handleCategorySelect} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                {filteredProducts?.map((item) => (
                    <div key={item.id} className='bg-white shadow rounded p-4 flex flex-col items-center'>
                        <img src={`${import.meta.env.VITE_API_URI}/${item.productImage}`} alt="" className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover' />
                        <h4 className='font-serif text-lg sm:text-xl'>{item.productName}</h4>
                        <p className='font-bold text-base sm:text-lg'>₹ {item.productPrice}</p>
                        <p className='text-sm sm:text-base text-center'>{item.productDesc}</p>
                        <button onClick={() => { handleClick(item) }} className='mt-2 p-2 bg-orange-500 text-white rounded shadow w-full sm:w-auto'>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
