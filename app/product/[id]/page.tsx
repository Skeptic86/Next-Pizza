import React from 'react';

interface ProductPageProps {
    params: {
        id: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = ({ params: { id } }) => {
    return <h1 className="text-center">Product {id}</h1>;
};

export default ProductPage;
