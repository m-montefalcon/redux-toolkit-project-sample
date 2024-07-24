// apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = "/";

export interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchBreeds: builder.query<Breed[], number | void>({
      query(limit = 10) {
        return `/breeds?limit=${limit}`;
      },
    }),
  }),
});

// Explicitly type the hooks for better TypeScript support

export const { useFetchBreedsQuery } = apiSlice;
export type UseFetchBreedsQuery = typeof apiSlice.endpoints.fetchBreeds.useQuery;
