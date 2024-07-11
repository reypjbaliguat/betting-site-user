import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import AppProvider from './AppProvider';

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'Betting Site',
    description: 'Betting Site'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={roboto.className}>
                <AppProvider> {children}</AppProvider>
            </body>
        </html>
    );
}
