import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { formatDate } from 'utils/helper';
import {
    EventsDataFromApi,
    EventDataFromApi,
    EventDetailsFromApi,
    LaunchesDataFromApi,
    LaunchDataFromApi
} from './types';

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
            transformResponse: (response: EventDetailsFromApi) => {
                return ({
                    id: response.id,
                    title: response.name,
                    date: formatDate(response.date),
                    description: response.description,
                    videoUrl: response.video_url,
                });
            },
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
