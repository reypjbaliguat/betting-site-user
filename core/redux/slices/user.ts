import { api } from './api';

const API_PATH = 'users';

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserByEmail: builder.query<void, string>({
            query: (email) => {
                return `${API_PATH}/email/${email}`;
            },
            transformResponse: (response: void) => response,
            providesTags: ['User']
        })
    })
});

export const { useGetUserByEmailQuery } = userApi;
