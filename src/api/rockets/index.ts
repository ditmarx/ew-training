import { rocketsApi } from '..';
import { RocketConfiguration } from './types';

export const extendedRocketsApi = rocketsApi.injectEndpoints({
    endpoints: (builder) => ({
        getRocketDetails: builder.query<RocketConfiguration, string>({
            query: (id) => ({
                url: `config/launcher/${id}/`,
            }),
        }),
    }),
});

export const {
    useGetRocketDetailsQuery,
} = extendedRocketsApi;
