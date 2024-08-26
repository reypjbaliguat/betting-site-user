import Link from 'next/link';
import SideNavLinks from './SideNavLinks';

function SideNav() {
    return (
        <div className='flex w-[250px] max-w-[250px] flex-col border border-gray-200 p-5'>
            <Link href={'/dashboard/games'}>
                <h1 className='w-full rounded-md border bg-blue-500 py-2 text-center text-xl text-white transition-all duration-1000 hover:border-blue-500 hover:bg-gray-50 hover:text-blue-500'>
                    Betting Site
                </h1>
            </Link>
            <SideNavLinks />
        </div>
    );
}

export default SideNav;
