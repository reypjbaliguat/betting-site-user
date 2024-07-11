'use client';

import { StatusSnackbar } from 'components/Snackbar';
import { StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { signOut, useSession } from 'next-auth/react';
import { SnackbarProvider } from 'notistack';
import { useEffect } from 'react';

function ClientProvider({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'authenticated' && session?.user?.error === 'SESSION_EXPIRED') {
            signOut({ callbackUrl: '/' });
        }
    }, [session?.user ?? {}]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledEngineProvider injectFirst>
                <SnackbarProvider
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    Components={{ alert: StatusSnackbar }}
                    maxSnack={3}
                >
                    {children}
                </SnackbarProvider>
            </StyledEngineProvider>
        </LocalizationProvider>
    );
}

export default ClientProvider;
