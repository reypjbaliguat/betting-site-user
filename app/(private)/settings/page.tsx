'use client';

import { useSession } from 'next-auth/react';

function Page() {
    const session = useSession();
    console.log(session);
    return <div>Settings</div>;
}

export default Page;
