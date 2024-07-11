import ClientProvider from 'components/providers/ClientProvider';
import StoreProvider from 'core/redux/StoreProvider';

function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <StoreProvider>
            <ClientProvider>{children} </ClientProvider>
        </StoreProvider>
    );
}

export default AppProvider;
