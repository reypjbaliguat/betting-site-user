import { mdiCash, mdiCog, mdiGamepad, mdiNoteMultipleOutline } from '@mdi/js';

export const sideNavLinks = [
    {
        label: 'Games',
        href: '/dashboard/games',
        icon: mdiGamepad
    },
    {
        label: 'Bets',
        href: '/dashboard/bets',
        icon: mdiCash
    },
    {
        label: 'Transactions',
        href: '/dashboard/transactions',
        icon: mdiNoteMultipleOutline
    },
    {
        label: 'Settings',
        href: '/dashboard/settings',
        icon: mdiCog
    }
];
