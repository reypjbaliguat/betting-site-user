import SideNav from './components/SideNav';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex min-h-screen w-full'>
            <SideNav />
            <div className='grow-1 flex p-5'>{children}</div>
        </div>
    );
}

export default Layout;
