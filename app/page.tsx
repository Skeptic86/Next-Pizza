import { Categories, Container, Filters, SortPopup, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title="Пиццы"
                                products={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 7,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 8,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 9,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 10,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 11,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 12,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                ]}
                                categoryId={1}
                            />
                            <ProductsGroupList
                                title="Комбо"
                                products={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 7,
                                        name: 'Чизбургер-пицца',
                                        price: 550,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                                        items: [{ price: 550 }],
                                    },
                                ]}
                                categoryId={2}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
