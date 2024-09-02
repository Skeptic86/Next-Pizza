'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui';

type Item = FilterCheckboxProps;

interface CheckboxFiltersGroupProps {
    className?: string;
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string) => void;
    defaultValue?: string;
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
    className,
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    onChange,
    defaultValue,
}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [ids, setIds] = React.useState<string[]>([]);

    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(search.toLowerCase()))
        : items.slice(0, limit);

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className={cn('', className)}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border-none"
                        onChange={onChangeSearchInput}
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        checked={false}
                        name={title}
                        onCheckedChange={(ids: any) => console.log(ids)}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};
