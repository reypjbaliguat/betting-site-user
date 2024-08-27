'use client';

import { useAppSelector } from 'core/redux/hooks';
import Link from 'next/link';
import SideNavLinks from './SideNavLinks';

function SideNav() {
    const { isOpen } = useAppSelector((state) => state.menu);
    return (
        <div
            className={`flex flex-col border border-gray-200 py-5 transition-all duration-1000 ${isOpen ? 'w-[250px] max-w-[250px] px-5' : 'w-[80px] max-w-[80px] px-2'}`}
        >
            <Link href={'/dashboard/games'}>
                <h1
                    className={`w-full rounded-md border bg-blue-500 py-2 text-center text-white transition-all duration-1000 hover:border-blue-500 hover:bg-gray-50 hover:text-blue-500 ${isOpen ? 'text-xl' : 'text-sm'}`}
                >
                    Betting Site
                </h1>
            </Link>
            <SideNavLinks isOpen={isOpen} />
        </div>
    );
}

export default SideNav;
