'use client';

import { useSession } from 'next-auth/react';

export default function Home() {
    const session = useSession();
    return <main className='flex h-full w-full' />;
}
