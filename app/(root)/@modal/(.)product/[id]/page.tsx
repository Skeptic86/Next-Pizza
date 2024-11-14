import { ChooseProductModal } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import React from 'react';

interface ProductPageProps {
    params: {
        id: string;
    };
}

const ProductModalPage: React.FC<ProductPageProps> = async ({ params: { id } }) => {
    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
        include: {
            ingredients: true,
            items: true,
        },
    });

    if (!product) {
        return notFound();
    }

    return <ChooseProductModal product={product}></ChooseProductModal>;
};

export default ProductModalPage;
