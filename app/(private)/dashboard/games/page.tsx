import { dummyDerby } from '@/constants/dummy';
import GameItem from './components/GameItem';
function Page() {
    return (
        <div className='flex w-full flex-wrap gap-5 lg:flex-nowrap'>
            {dummyDerby.map((derby) => (
                <GameItem key={derby.name} derby={derby} />
            ))}
        </div>
    );
}

export default Page;
