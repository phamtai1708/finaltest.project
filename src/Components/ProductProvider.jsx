import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const formatPrice = (price) => {
        const priceStr = price.toString();
        const part1 = priceStr.slice(0, -3);
        const part2 = priceStr.slice(-3);
        return `${part1}.${part2}`;
    }
    useEffect(() => {
        const getDataAPI = async () => {
            try {
                const response = await fetch("https://api.newfashion.com.vn/storefront-product/api/product/public/product-by-filter.json?page=1");
                const productData = await response.json();
                const productDetails =productData.items
                    .filter(item => item.images != null && item.sizes != null && item.min_variant_price !=null)
                    .map((item)=> (
                    {   id: item.id,
                        name: item.name,
                        category: item.category,
                        gender: item.gender,
                        minPrice: formatPrice(item.min_variant_price),
                        maxPrice: formatPrice(item.max_variant_price),
                        colors: item.colors.map(coloritem=>coloritem.color),
                        colorId: item.colors.map(coloritem=> "colorId"+ coloritem.color_id),
                        sizes: item.sizes.map(sizeitem=>sizeitem.size),
                        images: item.images.map(imageitem=>imageitem.url),
                        volume: Math.floor(Math.random() * 91) + 10,
                    }                   
                ));
                setProducts(productDetails);
            }catch(error){
                console.error("erro",error);
            }
        }
        getDataAPI();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;