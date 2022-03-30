import { eventsApi } from '..';
import { EventList, EventListItem, EventDetails } from './types';

export const extendedEventsApi = eventsApi.injectEndpoints({
    endpoints: (builder) => ({
        getUpcomingEvents: builder.query<EventListItem[], number>({
            query: (page = 0) => ({
                url: 'event/upcoming/',
                params: {
                    offset: page * 10,
                },
            }),
            transformResponse: (response: EventList) => {
                return response.results;
            },
        }),
        getEventDetails: builder.query<EventDetails, string>({
            query: (id) => ({
                url: `event/${id}/`,
            }),
        }),
    }),
});

export const {
    useGetUpcomingEventsQuery,
    useGetEventDetailsQuery,
} = extendedEventsApi;
