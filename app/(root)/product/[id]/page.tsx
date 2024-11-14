import { Container, GroupVariants, ProductImage, Title } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import React from 'react';

interface ProductPageProps {
    params: {
        id: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params: { id } }) => {
    const product = await prisma.product.findFirst({ where: { id: Number(id) } });

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <ProductImage size={40} imageUrl={product.imageUrl} />

                <div className="w-[490px] bg-[#f8f4f4] p-7">
                    <Title text={product.name} size="md" className="font-extrabold mb-1" />
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                        consequatur ullam eveniet. A natus sint, aut est consectetur cum, quam
                        deserunt voluptates blanditiis ullam necessitatibus! Recusandae asperiores
                        nam ea enim!
                    </p>

                    <GroupVariants
                        selectedValue="1"
                        items={[
                            { name: 'Маленькая', value: '1' },
                            { name: 'Средняя', value: '2' },
                            { name: 'Большая', value: '3', disabled: true },
                        ]}
                    />
                </div>
            </div>
        </Container>
    );
};

export default ProductPage;
