import { dummyDerby } from '@/constants/dummy';
import { Divider } from '@mui/material';
import ChoosingCard from './components/ChoosingCard';

interface Props {
    params: {
        id: string;
    };
}

function Page({ params: { id } }: Props) {
    const derby = dummyDerby[Number(id)];
    return (
        <div className='flex w-full flex-col items-center'>
            <iframe className='h-[600px] w-full' src={'https://www.youtube.com/embed/jfKfPfyJRdk?si=S2H0u1ypucJ1TeHR'} autoFocus />
            <Divider className='my-5 w-full' />
            <div className='flex w-full flex-col items-center'>
                <span className='mb-5 text-2xl font-bold'> {derby.name} (Fight 1)</span>
                <div className='flex w-full'>
                    <ChoosingCard label={'Wala'} totalBet={2000} potentialWin={1.8} />
                    <ChoosingCard label={'Meron'} totalBet={2000} potentialWin={1.8} />
                </div>
            </div>
        </div>
    );
}

export default Page;
