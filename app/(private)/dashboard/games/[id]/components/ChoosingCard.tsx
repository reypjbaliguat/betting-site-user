'use client';

import { Button } from '@mui/material';

interface Props {
    label: 'Wala' | 'Meron';
    totalBet: number;
    potentialWin: number;
}

function ChoosingCard({ label, totalBet, potentialWin }: Props) {
    const isWala = label === 'Wala';
    return (
        <div className='flex w-1/2 flex-col items-center border border-gray-200'>
            <span className={`w-full px-5 py-2 text-center text-2xl text-white ${isWala ? 'bg-blue-500' : 'bg-red-500'}`}>{label}</span>
            <span className={`mt-3 text-xl font-bold ${isWala ? 'text-blue-500' : 'text-red-500'}`}>{totalBet.toLocaleString()}</span>
            <span className='text-xl text-green-500'>({potentialWin})</span>
            <Button
                className='mb-5 mt-3 w-1/2'
                color={`${isWala ? 'primary' : 'error'}`}
                variant='contained'
                onClick={() => alert(`Bet ${label}`)}
            >
                Click to Bet{' '}
            </Button>
        </div>
    );
}

export default ChoosingCard;
