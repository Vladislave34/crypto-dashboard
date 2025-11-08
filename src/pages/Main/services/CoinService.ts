import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import type {ICoin} from "../models/ICoin";

interface SearchCoinsResponse {
    coins: ICoinSearch[];
}

interface ICoinSearch {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
}

export const postApi = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/v3/',
        prepareHeaders: (headers) => {
            headers.set('x-cg-demo-api-key', 'CG-woqFDSSSzL9EAyj5tSqHk1ZE');

            return headers;
        },
    }),
    tagTypes: ['POST'],
    endpoints: (build) => ({
        fetchAllСoins: build.query<ICoin[], { limit?: number; page?: number }>({
            query: ({limit  = 5, page = 1} = {} ) => ({

                url: 'coins/markets',
                params: {
                    per_page: limit,
                    page,
                    vs_currency: 'usd',
                    order: "market_cap_desc"
                    }

            }),

            // providesTags: result => ['POST']
        }),
        SearchCoins: build.query<SearchCoinsResponse, string>({
            query: (searchTerm) => ({
                url: 'search',
                params: {query: searchTerm},
            }),
            // providesTags: result => ['POST']
        }),
    })
})

