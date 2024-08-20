import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface ProductCardProps {
    className?: string;
    imageUrl: string;
    id: number;
    name: string;
    price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    className,
    imageUrl,
    name,
    id,
    price,
}) => {
    return (
        <div className={cn('', className)}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img src={imageUrl} alt={name} className="w-[215px] h-[215px]" />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
            </Link>
            <p className="text-sm text-gray-400">
                Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, чеснок
            </p>

            <div className="flex justify-between items-center mt-4">
                <span className="text-[20px]">{price} ₽</span>
                <Button variant="secondary" className="text-base font-bold">
                    <Plus size={16} className="mr-1" />
                    Добавить
                </Button>
            </div>
        </div>
    );
};