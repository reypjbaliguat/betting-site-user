'use client';

import { StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StatusSnackbar } from 'components/Snackbar';
import { SnackbarProvider } from 'notistack';

function ClientProvider({ children }: { children: React.ReactNode }) {
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
