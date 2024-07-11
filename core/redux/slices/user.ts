import { GetUserResponse, GetUserProps, GetUserByIdResponse, CreateUserResponse } from '@/types/user';
import { api } from './api';

const API_PATH = 'users';

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<GetUserResponse, GetUserProps>({
            query: ({ role, _id, email, skip, limit }) => {
                const params = new URLSearchParams({
                    skip: skip.toString(),
                    limit: limit.toString(),
                    ...(role && { role }),
                    ...(_id && { _id }),
                    ...(email && { email })
                });
                return `${API_PATH}?${params}`;
            },
            transformResponse: (response: GetUserResponse) => response,
            providesTags: ['User']
        }),
        getUserById: builder.query<GetUserByIdResponse, string>({
            query: (id) => {
                return `${API_PATH}/${id}`;
            },
            transformResponse: (response: GetUserByIdResponse) => response,
            providesTags: ['User']
        }),
        updateUser: builder.mutation<void, { id: string | undefined; body: { role: string } }>({
            query: ({ id, body }) => ({
                url: `${API_PATH}/${id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['User']
        }),
        createUser: builder.mutation<CreateUserResponse, { body: { role: string; email: string; password?: string } }>({
            query: ({ body }) => ({
                url: `${API_PATH}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['User']
        })
    })
});

export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserMutation, useCreateUserMutation } = userApi;
