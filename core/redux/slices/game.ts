import { CreateGameResponse, GetGameByIdResponse, GetGameProps, GetGameResponse } from '@/types/game';
import { api } from './api';

const API_PATH = 'games';

const gameApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getGames: builder.query<GetGameResponse, GetGameProps>({
            query: ({ name, skip = 10, limit = 10 }) => {
                const params = new URLSearchParams({
                    skip: skip.toString(),
                    limit: limit.toString(),
                    ...(name && { name })
                });
                return `${API_PATH}?${params}`;
            },
            transformResponse: (response: GetGameResponse) => response,
            providesTags: ['Game']
        }),
        getGameById: builder.query<GetGameByIdResponse, string>({
            query: (id) => {
                return `${API_PATH}/${id}`;
            },
            transformResponse: (response: GetGameByIdResponse) => response,
            providesTags: ['Game']
        }),
        updateGame: builder.mutation<void, { id: string | undefined; body: { name: string; description: string; totalFights: string } }>({
            query: ({ id, body }) => ({
                url: `${API_PATH}/${id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Game']
        }),
        createGame: builder.mutation<CreateGameResponse, { body: { name: string; description: string; totalFights: string } }>({
            query: ({ body }) => ({
                url: `${API_PATH}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Game']
        })
    })
});

export const { useGetGamesQuery, useGetGameByIdQuery, useUpdateGameMutation, useCreateGameMutation } = gameApi;
