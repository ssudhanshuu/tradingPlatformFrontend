import { apiSlice } from "../../app/api/apiSlice";


export const marketApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSymbolPrice: builder.query({
            query: (symbol) => `/api/symbol-price?symbol=${symbol}`,
        }),
        getCandlestick: builder({
            query: ({ symbol, interval }) => `api/candlestick?symbol=${symbol}&interval=${interval}`,
        })
    })
})
export const {
    useGetSymbolPriceQuery,
    useGetCandlestickQuery
} = marketApiSlice;