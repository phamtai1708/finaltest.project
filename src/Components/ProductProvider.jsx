import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Kiểm tra nếu có dữ liệu trong local storage
        const localData = localStorage.getItem('products');
        if (localData) {
            setProducts(JSON.parse(localData));
        } else {
            // Nếu không, gọi API để lấy dữ liệu
            
        }
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;