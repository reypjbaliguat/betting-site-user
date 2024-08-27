import Menu from './Menu';
import User from './User';

function TopNav() {
    return (
        <div className='flex w-full justify-between border border-l-0 border-gray-200 px-5 py-3'>
            <Menu />
            <User />
        </div>
    );
}

export default TopNav;
