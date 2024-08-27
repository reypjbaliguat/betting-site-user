'use client';

import { sideNavLinks } from '@/constants/sidenav';
import Icon from '@mdi/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideNavLinks() {
    const pathname = usePathname();
    return (
        <div className='mt-7 flex flex-col gap-y-2'>
            {sideNavLinks.map((link) => {
                return (
                    <Link href={link.href} key={link.href}>
                        <div
                            className={`flex w-full items-center justify-start rounded-md border border-gray-200 px-4 py-3 transition-all duration-1000 ${pathname.includes(link.href) && 'justify-center bg-blue-500 px-4 text-white'}`}
                        >
                            <Icon path={link.icon} size={1} />
                            <span className='ml-2'>{link.label}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default SideNavLinks;
