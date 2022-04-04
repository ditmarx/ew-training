import { launchesApi } from '..';
import { LaunchListDetailed, LaunchListItem, LaunchDetails } from './types';

export const extendedLaunchesApi = launchesApi.injectEndpoints({
    endpoints: (builder) => ({
        getUpcomingLaunches: builder.query<LaunchListItem[], number>({
            query: (page = 0) => ({
                url: 'launch/upcoming/',
                method: 'GET',
                params: {
                    mode: 'detailed',
                    offset: page * 10,
                },
            }),
            transformResponse: (response: LaunchListDetailed) => {
                return response.results;
            },
        }),
        getLaunchDetails: builder.query<LaunchDetails, string>({
            query: (id) => ({
                url: `launch/${id}/`,
            }),
        }),
    }),
});

export const {
    useGetUpcomingLaunchesQuery,
    useGetLaunchDetailsQuery,
} = extendedLaunchesApi;
