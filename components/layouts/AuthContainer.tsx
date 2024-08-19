import { Card } from '@mui/material';
import React from 'react';

function AuthContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <Card elevation={0} className='z-10 flex w-96 justify-center border border-gray-300 p-10'>
                {children}
            </Card>
        </div>
    );
}

export default AuthContainer;
