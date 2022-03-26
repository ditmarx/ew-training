import { launchesApi } from '..';
import { LaunchesDataFromApi, LaunchDataFromApi, LaunchDetailsFromApi } from './types';

export const extendedLaunchesApi = launchesApi.injectEndpoints({
    endpoints: (builder) => ({
        getUpcomingLaunches: builder.query({
            query: (page: number = 0) => ({
                url: '/launch/upcoming/',
                params: {
                    mode: 'detailed',
                    offset: page * 10,
                },
            }),
            transformResponse: (response: LaunchesDataFromApi) => {
                return response.results.map((item: LaunchDataFromApi) => {
                    const imgUrl = item.image_url ?? item.rocket.configuration.image_url;
                    return ({
                        id: item.id,
                        title: item.name,
                        date: item.net,
                        imgUrl,
                    });
                });
            },
        }),
        getLaunchDetails: builder.query({
            query: (id: string) => ({
                url: `/launch/${id}`,
            }),
            transformResponse: (response: LaunchDetailsFromApi) => {
                console.log(response);
                const rocket = response.rocket.configuration;
                return ({
                    id: response.id,
                    title: response.name,
                    date: response.net,
                    videoUrl: undefined,
                    pad: {
                        lat: parseFloat(response.pad.latitude),
                        lng: parseFloat(response.pad.longitude),
                    },
                    rocket: {
                        id: rocket.id,
                        name: rocket.full_name,
                        family: rocket.family,
                        variant: rocket.variant,
                        description: rocket.description,
                    },
                });
            },
        }),
    }),
});

export const {
    useGetUpcomingLaunchesQuery,
    useGetLaunchDetailsQuery,
} = extendedLaunchesApi;
