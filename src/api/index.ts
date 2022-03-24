import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type EventsDataFromApi = {
    count: number;
    results: EventDataFromApi[];
};

export type EventDataFromApi = {
    id: number;
    name: string;
    date: string;
    feature_image: string;
};

type LaunchesDataFromApi = {
    count: number;
    results: LaunchDataFromApi[];
};

export type LaunchDataFromApi = {
    id: string;
    image_url: string;
    name: string;
    net: string;
    rocket: {
        configuration: {
            image_url: string;
        }
    };
};

const formatDate = (dateFromApi: string) => (
    new Date(dateFromApi).toLocaleString('en-us', {
        dateStyle: 'medium',
        timeStyle: 'short'
    })
);

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://spacelaunchnow.me/api/3.3.0/' }),
    endpoints: (builder) => ({
        getUpcomingEvents: builder.query({
            query: (page: number = 0) => ({
                url: '/event/upcoming/',
                params: {
                    offset: page * 10,
                },
            }),
            transformResponse: (response: EventsDataFromApi) => {
                return response.results?.map((item: EventDataFromApi) => ({
                    id: item.id,
                    title: item.name,
                    date: formatDate(item.date),
                    imgUrl: item.feature_image,
                }));
            },
        }),
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
                        date: formatDate(item.net),
                        imgUrl,
                    });
                });
            },
        }),
        getEventDetails: builder.query({
            query: (id: string) => ({ url: `/event/${id}` }),
        }),
        getLaunchDetails: builder.query({
            query: (id: string) => ({ url: `/launch/${id}` }),
        }),
        getRocketDetails: builder.query({
            query: (id: string) => ({ url: `/config/launcher/${id}` }),
        }),
    }),
});

export const {
    useGetUpcomingEventsQuery,
    useGetUpcomingLaunchesQuery,
    useGetEventDetailsQuery,
    useGetLaunchDetailsQuery,
    useGetRocketDetailsQuery,
    usePrefetch,
} = api;
