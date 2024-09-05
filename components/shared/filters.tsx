'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface FiltersProps {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
    const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();
    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));

    const [prices, setPrice] = useState<PriceProps>({
        priceFrom: 0,
        priceTo: 1000,
    });

    const onChangePrice = (name: keyof PriceProps, value: number) => {
        setPrice({ ...prices, [name]: value });
    };

    const items = ingredients.map((item) => ({
        text: item.name,
        value: item.id.toString(),
    }));

    useEffect(() => {
        console.log(sizes, pizzaTypes, prices, selectedIngredients);
    }, [sizes, pizzaTypes, prices, selectedIngredients]);

    return (
        <div className={cn('', className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            {/* Чекбоксы */}
            <CheckboxFiltersGroup
                title="Тип теста"
                className="mb-5"
                selectedValues={pizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },
                ]}
                onClickCheckobox={togglePizzaTypes}
            />

            <CheckboxFiltersGroup
                title="Размеры"
                className="mb-5"
                selectedValues={sizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                ]}
                onClickCheckobox={toggleSizes}
            />

            {/* Фильтр цен */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="flex gap-3 mb-5">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        value={String(prices.priceFrom)}
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={String(prices.priceTo)}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
                />
            </div>

            {/* Фильтр ингридентов */}
            <CheckboxFiltersGroup
                title="Ингредиенты"
                className="mt-5"
                limit={6}
                items={items}
                defaultItems={items.slice(0, 6)}
                loading={loading}
                onClickCheckobox={onAddId}
                selectedValues={selectedIngredients}
            />
        </div>
    );
};
