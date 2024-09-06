import { Filters } from '@/components/shared';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSet } from 'react-use';
import { useState } from 'react';

interface QueryFilters extends PriceProps {
    pizzaTypes: string;
    sizes: string;
    ingredients: string;
}

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

export interface Filters {
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    selectedIngredients: Set<string>;
    prices: PriceProps;
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setSizes: (key: string) => void;
    setPizzaTypes: (key: string) => void;
    setSelectedIngredients: (key: string) => void;
}

export const useFilters = (): ReturnProps => {
    const router = useRouter();
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
        new Set<string>(searchParams.get('ingredients')?.split(',')),
    );

    const [sizes, { toggle: toggleSizes }] = useSet(
        new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []),
    );

    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
        new Set<string>(
            searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [],
        ),
    );

    const [prices, setPrices] = useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || 0,
        priceTo: Number(searchParams.get('priceTo')) || 0,
    });

    const updatePrices = (name: keyof PriceProps, value: number) => {
        setPrices((prev) => ({ ...prev, [name]: value }));
    };

    return {
        sizes,
        pizzaTypes,
        selectedIngredients,
        prices,
        setPrices: updatePrices,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients,
    };
};
