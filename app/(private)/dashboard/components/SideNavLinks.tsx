'use client';

import { sideNavLinks } from '@/constants/sidenav';
import Icon from '@mdi/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideNavLinks() {
    const pathname = usePathname();
    return (
        <div className='mt-7 flex flex-col gap-y-5'>
            {sideNavLinks.map((link) => {
                return (
                    <Link href={link.href} key={link.href}>
                        <div
                            className={`flex w-full items-center justify-center border border-gray-50 py-2 transition-all duration-1000 ${pathname.includes(link.href) && 'bg-blue-500'}`}
                        >
                            <Icon path={link.icon} size={1.5} />
                            <span className='ml-2'>{link.label}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default SideNavLinks;
