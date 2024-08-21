'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Button, Divider, TextField } from '@mui/material';
import { FormError } from 'components/form-error';
import { FormSuccess } from 'components/form-success';
import PasswordField from 'components/inputs/PasswordField';
import { useCurrentUser } from 'core/helpers/auth';
import signInSchema, { SignInFormData } from 'core/schemas/sign-in';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

function Form() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const router = useRouter();
    const session = useSession();
    const user = useCurrentUser();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm<SignInFormData>({ resolver: zodResolver(signInSchema), mode: 'all' });

    const handleSignInSubmit = async (data: SignInFormData) => {
        const { email, password } = data;
        setLoading(true);
        await signIn('credentials', {
            email,
            password,
            redirect: false
        }).then((res) => {
            if (res?.ok) {
                router.push('/dashboard');
                console.log('redirect');
                setError('');
            }
            if (res?.error) {
                console.log('error');
                setError(res?.error);
            }
        });
        setLoading(false);
    };

    const handleGoogleLogin = async () => {
        await signIn('google', {
            ...(callbackUrl && { callbackUrl, redirect: true })
        });
    };
    if (session.status === 'authenticated') {
        router.push('/dashboard');
    }
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
            <FormError message={error} />
            <FormSuccess message={success} />
            <LoadingButton loading={isSubmitting || loading} type='submit' variant='contained' fullWidth>
                Sign In
            </LoadingButton>

            <Divider className='w-full'>
                <span className='text-gray-500'> OR </span>
            </Divider>
            <div className='flex gap-x-5'>
                <Button onClick={handleGoogleLogin}>
                    <FcGoogle className='h-7 w-7 cursor-pointer' />
                </Button>
            </div>
            <Link href='/auth/sign-up' className='text-blue-500'>
                No account? Click here to register!
            </Link>
        </form>
    );
}

export default Form;
