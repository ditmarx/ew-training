import { eventsApi } from '..';
import { EventsDataFromApi, EventDataFromApi, EventDetailsFromApi } from './types';

export const extendedEventsApi = eventsApi.injectEndpoints({
    endpoints: (builder) => ({
        getUpcomingEvents: builder.query({
            query: (page: number = 0) => ({
                url: 'event/upcoming/',
                params: {
                    offset: page * 10,
                },
            }),
            transformResponse: (response: EventsDataFromApi) => {
                return response.results?.map((item: EventDataFromApi) => ({
                    id: item.id,
                    title: item.name,
                    date: item.date,
                    imgUrl: item.feature_image,
                }));
            },
        }),
        getEventDetails: builder.query({
            query: (id: string) => ({
                url: `event/${id}/`,
            }),
            transformResponse: (response: EventDetailsFromApi) => {
                return ({
                    id: response.id,
                    title: response.name,
                    date: response.date,
                    description: response.description,
                    videoUrl: response.video_url,
                });
            },
        }),
    }),
});

export const {
    useGetUpcomingEventsQuery,
    useGetEventDetailsQuery,
} = extendedEventsApi;
