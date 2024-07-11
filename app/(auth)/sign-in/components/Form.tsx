'use client';

import { useState } from 'react';
import { FormHelperText, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import signInSchema, { SignInFormData } from 'core/schemas/sign-in';
import { LoadingButton } from '@mui/lab';
import { enqueueSnackbar } from 'notistack';
import { signIn, SignInResponse, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import PasswordField from 'components/inputs/PasswordField';
import { SnackbarMessage } from 'core/constants/messages';
import { DEFAULT_LOGIN_REDIRECT } from 'routes';

function Form() {
    const [loading, setLoading] = useState(false);
    const session = useSession();

    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm<SignInFormData>({ resolver: zodResolver(signInSchema) });

    const handleSignInSubmit = async (data: SignInFormData) => {
        const { email, password } = data;
        setLoading(true);

        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        }).then((res: SignInResponse | undefined) => {
            setLoading(false);
            console.log(res);
            // enqueueSnackbar('Incorrect email/password or unauthorized entry!', {
            //     variant: 'error'
            // });

            // enqueueSnackbar(SnackbarMessage.GENERIC_ERROR, {
            //     variant: 'error'
            // });
        });
    };
    console.log(errors);
    return (
        <form className='flex basis-full flex-col items-center gap-y-5' onSubmit={handleSubmit(handleSignInSubmit)}>
            <h6 className='my-0 text-2xl font-bold'>Login</h6>
            <Controller
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label='Email address'
                        placeholder='email@gmail.com'
                        helperText={errors.email?.message}
                        error={!!errors.email}
                        fullWidth
                    />
                )}
                name='email'
            />
            <Controller
                control={control}
                render={({ field }) => (
                    <PasswordField {...field} label='Password' helperText={errors.password?.message} error={!!errors.password} fullWidth />
                )}
                name='password'
            />
            <LoadingButton loading={isSubmitting || loading} type='submit' variant='contained' fullWidth>
                Sign In
            </LoadingButton>
        </form>
    );
}

export default Form;
