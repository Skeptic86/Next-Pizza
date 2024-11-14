import React from 'react';
import { cn } from '@/lib/utils';

interface PageProps {
    className?: string;
}

export const Page: React.FC<PageProps> = ({ className }) => {
    return <div className={cn('', className)}></div>;
};
