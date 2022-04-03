import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

type AxiosBaseQuery = (
    args: { baseUrl: string | undefined }
) => BaseQueryFn<
    {
        url: string,
        method?: AxiosRequestConfig['method'],
        data?: AxiosRequestConfig['data'],
        params?: AxiosRequestConfig['params'],
    },
    unknown,
    unknown
>;

export const axiosBaseQuery: AxiosBaseQuery = (
    { baseUrl } = { baseUrl: '' }
) => async ({ url, method, params, data }) => {
    try {
        const result = await axios({
            url: baseUrl + url,
            method,
            data,
            params,
        });
        return { data: result.data };
    } catch (axiosError) {
        const error = axiosError as AxiosError;
        return {
            error: {
                status: error.response?.status,
                data: error.response?.data,
            }
        };
    }
};
