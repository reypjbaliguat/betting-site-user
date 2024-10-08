'use client';

import { useRegisterUserMutation } from '@/slices/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Button, Divider, TextField } from '@mui/material';
import { FormError } from 'components/form-error';
import { FormSuccess } from 'components/form-success';
import PasswordField from 'components/inputs/PasswordField';
import signUpSchema, { SignUpFormData } from 'core/schemas/sign-up';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

function Form() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [register] = useRegisterUserMutation();
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchema) });

    const handleSignInSubmit = async (data: SignUpFormData) => {
        setLoading(true);
        register(data)
            .unwrap()
            .then((data) => {
                enqueueSnackbar(`${data.email} successfully created`, {
                    severity: 'success',
                    variant: 'alert'
                });
                router.push('/auth/sign-in');
            })
            .catch((err) => {
                setError(err.data.error);
            });
        setLoading(false);
    };
    const handleGoogleLogin = async () => {
        await signIn('google', {
            ...(callbackUrl && { callbackUrl, redirect: true })
        });
    };
    return (
        <form className='flex basis-full flex-col items-center gap-y-5' onSubmit={handleSubmit(handleSignInSubmit)}>
            <h6 className='my-0 text-2xl font-bold'>Sign Up</h6>
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
            <Controller
                control={control}
                render={({ field }) => (
                    <PasswordField
                        {...field}
                        label='Confirm Password'
                        helperText={errors.confirmPassword?.message}
                        error={!!errors.confirmPassword}
                        fullWidth
                    />
                )}
                name='confirmPassword'
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <LoadingButton loading={isSubmitting || loading} type='submit' variant='contained' fullWidth>
                Submit
            </LoadingButton>

            <Divider className='w-full'>
                <span className='text-gray-500'> OR </span>
            </Divider>
            <div className='flex gap-x-5'>
                <Button onClick={handleGoogleLogin}>
                    <FcGoogle className='h-7 w-7 cursor-pointer' />
                </Button>
            </div>
            <Link href='/auth/sign-in' className='text-center text-blue-500'>
                Already have an account? Click here to sign in!
            </Link>
        </form>
    );
}

export default Form;
