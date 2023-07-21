import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/photos?albumId=1",
  }),
  endpoints: (build) => ({
    getPhotos: build.query({
      query: () => ``,
    }),
  }),
});

export const { useGetPhotosQuery } = api;
