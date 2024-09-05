'use client';

import { DerbyStatuses } from '@/types/derby';
import { Chip, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';

interface Props {
    derby: {
        id: string;
        name: string;
        location: string;
        videoSrc: string;
        startDate: string;
        endDate: string;
        status: DerbyStatuses;
        prizePool: number;
    };
}

function GameItem({ derby: { id, name, location, startDate, endDate, status, prizePool } }: Props) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/dashboard/games/${id}`)}
            className='flex h-96 w-1/4 cursor-pointer flex-col items-center rounded-md border border-gray-200 p-5 transition-all duration-1000 hover:shadow-lg'
        >
            <span className='text-xl font-semibold'>{name}</span>
            <Divider className='my-5 w-full' />
            <div className='flex w-full flex-col gap-5 text-lg'>
                <div className='flex'>
                    <span className='w-1/3'>Location:</span>
                    <span> {location}</span>
                </div>
                <div className='flex'>
                    <span className='w-1/3'>Start Date:</span>
                    <span> {startDate}</span>
                </div>
                <div className='flex'>
                    <span className='w-1/3'>End Date:</span>
                    <span> {endDate}</span>
                </div>
                <div className='flex'>
                    <span className='w-1/3'>Status:</span>
                    <Chip
                        label={status}
                        className='capitalize'
                        color={DerbyStatuses.SCHEDULED ? 'warning' : DerbyStatuses.ONGOING ? 'success' : 'primary'}
                    />
                </div>
                <div className='flex'>
                    <span className='w-1/3'>Prize Pool:</span>
                    <span>&#8369; {prizePool}</span>
                </div>
            </div>
        </div>
    );
}

export default GameItem;
