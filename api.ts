import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IItem } from "./store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/photos?albumId=1",
  }),
  endpoints: (build) => ({
    getPhotos: build.query<IItem[], void>({
      query: () => ``,
    }),
  }),
});

export const { useGetPhotosQuery } = api;
