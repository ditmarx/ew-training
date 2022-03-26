import { rocketsApi } from '..';

export const extendedRocketsApi = rocketsApi.injectEndpoints({
    endpoints: (builder) => ({
        getRocketDetails: builder.query({
            query: (id: string) => ({
                url: `/config/launcher/${id}`,
            }),
        }),
    }),
});

export const {
    useGetRocketDetailsQuery,
} = extendedRocketsApi;
