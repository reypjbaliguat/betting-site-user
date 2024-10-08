import SideNav from './components/SideNav';
import TopNav from './components/TopNav';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex min-h-screen w-full'>
            <SideNav />
            <div className='flex grow flex-col'>
                <TopNav />
                <div className='flex w-full p-5'>{children}</div>
            </div>
        </div>
    );
}

export default Layout;
