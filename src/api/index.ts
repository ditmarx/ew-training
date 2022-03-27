import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './utils/axiosBaseQuery';

export const eventsApi = createApi({
    reducerPath: 'eventsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_BASE_URL }),
    endpoints: () => ({}),
});

export const launchesApi = createApi({
    reducerPath: 'launchesApi',
    baseQuery: axiosBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_BASE_URL }),
    endpoints: () => ({}),
});

export const rocketsApi = createApi({
    reducerPath: 'rocketsApi',
    baseQuery: axiosBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_BASE_URL }),
    endpoints: () => ({}),
});
