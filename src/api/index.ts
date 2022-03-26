import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventsApi = createApi({
    reducerPath: 'eventsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_BASE_URL }),
    endpoints: () => ({}),
});

export const launchesApi = createApi({
    reducerPath: 'launchesApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_BASE_URL }),
    endpoints: () => ({}),
});

export const rocketsApi = createApi({
    reducerPath: 'rocketsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_BASE_URL }),
    endpoints: () => ({}),
});
