import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { eventsApi, launchesApi, rocketsApi } from '../api';

const store = configureStore({
    reducer: {
        [eventsApi.reducerPath]: eventsApi.reducer,
        [launchesApi.reducerPath]: launchesApi.reducer,
        [rocketsApi.reducerPath]: rocketsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        eventsApi.middleware,
        launchesApi.middleware,
        rocketsApi.middleware,
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
