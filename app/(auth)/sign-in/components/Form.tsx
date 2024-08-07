'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import PasswordField from 'components/inputs/PasswordField';
import signInSchema, { SignInFormData } from 'core/schemas/sign-in';
import { signIn, SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

function Form() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const router = useRouter();
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
            redirect: false
        }).then((res: SignInResponse | undefined) => {
            setLoading(false);
            if (res?.error) {
                enqueueSnackbar(res?.error, {
                    variant: 'alert',
                    severity: 'error'
                });
            } else {
                router.push('/users');
            }
        });
    };
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
