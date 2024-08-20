'use client';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function Page() {
    const params = useSearchParams();
    const errorMessage = params.get('error');
    return (
        <div className='flex h-screen w-full flex-col items-center justify-center gap-y-5 bg-gray-200'>
            <span className='text-4xl'>Oops! Something went wrong!</span>
            <span className='rounded-md bg-red-200 p-5 text-red-500'>{errorMessage}</span>
            <Link href='/auth/sign-in'>
                <Button variant='contained'> Go back</Button>
            </Link>
        </div>
    );
}

export default Page;
