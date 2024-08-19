'use client';

import { useGetGamesQuery } from '@/slices/game';
import { useSession } from 'next-auth/react';

function Page() {
    const session = useSession();
    const data = useGetGamesQuery({});
    return <div />;
}

export default Page;
