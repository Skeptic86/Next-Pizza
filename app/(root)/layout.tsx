import type { Metadata } from 'next';
import { Header } from '@/components/shared';

export const metadata: Metadata = {
    title: 'NextPizza | Главная',
    description: 'NextPizza',
};

export default function HomeLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Header />
            {children}
            {modal}
        </main>
    );
}
