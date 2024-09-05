'use client';

import { sideNavLinks } from '@/constants/sidenav';
import Icon from '@mdi/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideNavLinks({ isOpen }: { isOpen: boolean }) {
    const pathname = usePathname();
    return (
        <div className='mt-7 flex flex-col gap-y-2'>
            {sideNavLinks.map((link) => {
                return (
                    <Link href={link.href} key={link.href}>
                        <div
                            className={`flex w-full items-center justify-start rounded-md border border-gray-200 py-3 transition-all duration-1000 ${pathname.includes(link.href) ? 'justify-center bg-blue-500 text-white' : 'hover:border-blue-500 hover:text-blue-500'} ${isOpen ? 'px-4 hover:px-10' : 'px-1'}`}
                        >
                            <Icon path={link.icon} size={1} />
                            {isOpen && <span className='ml-2'>{link.label}</span>}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default SideNavLinks;
