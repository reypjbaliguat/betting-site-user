'use client';

import { SET_MENU_STATE } from '@/slices/menuSlice';
import { mdiMenuClose, mdiMenuOpen } from '@mdi/js';
import Icon from '@mdi/react';
import { useAppDispatch, useAppSelector } from 'core/redux/hooks';

function Menu() {
    const { isOpen } = useAppSelector((state) => state.menu);
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(SET_MENU_STATE({ isOpen: !isOpen }));
    };
    return (
        <div onClick={handleClick} className='cursor-pointer'>
            <Icon path={isOpen ? mdiMenuOpen : mdiMenuClose} size={1} className='text-blue-500' />
        </div>
    );
}

export default Menu;
