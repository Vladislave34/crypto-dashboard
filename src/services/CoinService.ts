import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import type {ICoin} from "../pages/Main/models/ICoin.ts";

import type {AppDispatch} from "../store/store.ts";
import {setTotalCount} from "../store/reducers/coinSlice.ts";
// import type {ICoinDetails} from "../pages/CoinDetails/models/ICoinDetails.ts";

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
// interface CoinApiResponse {
//     id: string;
//     name: string;
//     image: { thumb: string; small: string; large: string };
//     market_data: {
//         current_price: { usd: number };
//         market_cap: { usd: number };
//         price_change_percentage_24h: number;
//         sparkline_7d?: { price: number[] };
//     };
// }
interface SearchParams {
    searchTerm: string;
    per_page?: number;
    page?: number;
    dispatch: AppDispatch;
}
interface CoinById {
    prices: number[][];
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
        fetchСoinById: build.query<CoinById, {days : number; coin: ICoin}>({
            query: ({days  = 1, coin  }  ) => ({

                url: `coins/${coin.id}/market_chart`,
                params: {
                    vs_currency: "usd",
                    days: days,
                    interval: "daily"
                },

            }),

            // providesTags: result => ['POST']
        }),
        searchCoins: build.query<ICoin[], SearchParams>({
            async queryFn({ searchTerm, per_page = 7, page = 1, dispatch }, _queryApi, _extraOptions, fetchWithBQ) {

                const searchResult = await fetchWithBQ({
                    url: "search",
                    params: { query: searchTerm },
                });

                if (searchResult.error) return { error: searchResult.error };

                const coins = (searchResult.data as SearchCoinsResponse).coins;
                dispatch(setTotalCount(coins.length));
                const ids = coins.map((c: ICoinSearch) => c.id as string).join(",");


                const marketsResult = await fetchWithBQ({
                    url: "coins/markets",
                    params: {
                        vs_currency: "usd",
                        ids,
                        per_page,
                        page,
                    },
                });

                if (marketsResult.error) return { error: marketsResult.error };

                return { data: marketsResult.data as ICoin[] };
            },
        }),

    })
})

