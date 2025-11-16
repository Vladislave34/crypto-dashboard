import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ICoin} from "../../pages/Main/models/ICoin.ts";


interface CoinState {
    currentPage: number;
    searchTerm: string;
    FavCoins: ICoin[];
    mainCoin: ICoin;
    totalCount: number;
}
const storedCoins: ICoin[] = JSON.parse(localStorage.getItem("favCoins") || "[]");

const initialState: CoinState = {
    currentPage: 1,
    searchTerm: "",
    FavCoins: storedCoins,
    totalCount: 100,
    mainCoin:{
        id: 'bitcoin',
        name: "Bitcoin",
        image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        current_price: 103429,
        market_cap: 2061514431576,
        price_change_percentage_24h: 1.59235,
        symbol: "btc",
        total_volume: 0,
        circulating_supply: 0,
        high_24h: 0,
        atl_date: '',
        total_supply: 0,
        low_24h: 0,
        fully_diluted_valuation: 0,
        max_supply: 0,
    }
}
export const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers:{
        setCurrentPage(state, action: PayloadAction<number>){
                state.currentPage = action.payload;
            },
        setSearchTerm(state, action: PayloadAction<string>){
            state.searchTerm = action.payload;
        },
        addFavCoins(state, action: PayloadAction<ICoin>){
            if (!state.FavCoins.some(c => c.id === action.payload.id)) {
                state.FavCoins.push(action.payload);
                localStorage.setItem("favCoins", JSON.stringify(state.FavCoins));
            }

        },
        removeFavCoins(state, action: PayloadAction<ICoin>){
            state.FavCoins = state.FavCoins.filter(c => c.id !== action.payload.id);
            localStorage.setItem("favCoins", JSON.stringify(state.FavCoins));
        },
        setTotalCount(state, action: PayloadAction<number>){
            state.totalCount = action.payload;
        },
        setMainCoin(state, action: PayloadAction<ICoin>){
            state.mainCoin = action.payload;
        }

    }
});
export default coinSlice.reducer;
export const { setCurrentPage, setSearchTerm, addFavCoins, removeFavCoins, setTotalCount, setMainCoin} = coinSlice.actions;