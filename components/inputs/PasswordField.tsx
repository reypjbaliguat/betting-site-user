'use client';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js';
import Icon from '@mdi/react';

function PasswordField(props: TextFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextField
            {...props}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                            <Icon path={showPassword ? mdiEyeOutline : mdiEyeOffOutline} size={1} />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
}

export default PasswordField;
