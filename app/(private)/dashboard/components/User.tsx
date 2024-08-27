'use client';

import { Button, styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { useCurrentUser } from 'core/helpers/auth';
import { signOut } from 'next-auth/react';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(
    ({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#ffffff',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9'
        }
    })
);
function User() {
    const user = useCurrentUser();
    return (
        <HtmlTooltip
            title={
                <div className='flex w-32 bg-white'>
                    <Button fullWidth color='error' onClick={() => signOut()}>
                        Logout
                    </Button>{' '}
                </div>
            }
            placement='top-start'
        >
            <span className='text-blue-500'>{user}</span>
        </HtmlTooltip>
    );
}

export default User;
