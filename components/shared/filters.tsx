'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';

interface FiltersProps {
    className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
    const { ingredients, loading } = useIngredients();
    const filters = useFilters();

    useQueryFilters(filters);

    const items = ingredients.map((item) => ({
        text: item.name,
        value: item.id.toString(),
    }));

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };

    return (
        <div className={cn('', className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            {/* Чекбоксы */}
            <CheckboxFiltersGroup
                title="Тип теста"
                className="mb-5"
                selectedValues={filters.pizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },
                ]}
                onClickCheckobox={filters.setPizzaTypes}
            />

            <CheckboxFiltersGroup
                title="Размеры"
                className="mb-5"
                selectedValues={filters.sizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                ]}
                onClickCheckobox={filters.setSizes}
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
                        value={String(filters.prices.priceFrom)}
                        onChange={(e) => filters.setPrices('priceFrom', +e.target.value)}
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={String(filters.prices.priceTo)}
                        onChange={(e) => filters.setPrices('priceTo', +e.target.value)}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
                    onValueChange={([priceFrom, priceTo]) => updatePrices([priceFrom, priceTo])}
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
                onClickCheckobox={filters.setSelectedIngredients}
                selectedValues={filters.selectedIngredients}
            />
        </div>
    );
};
