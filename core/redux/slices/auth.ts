import { SignUpPayload } from '@/(auth)/auth/sign-up/schema';
import { SignUpResponse } from '@/types/auth';
import { api } from './api';

const API_PATH = 'auth';

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<SignUpResponse, SignUpPayload>({
            query: (body) => ({
                url: `${API_PATH}/register`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Auth']
        })
    })
});

export const { useRegisterUserMutation } = authApi;
