import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { ProductCard } from './product-card';

interface ProductsGroupListProps {
    className?: string;
    title: string;
    products: any[];
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
    className,
    title,
    products,
    listClassName,
    categoryId,
}) => {
    return (
        <div className={cn('', className)}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};
