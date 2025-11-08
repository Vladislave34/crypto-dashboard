import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


interface CoinState {
    currentPage: number;
    searchTerm: string;
}

const initialState: CoinState = {
    currentPage: 1,
    searchTerm: "",
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
        }

    }
});
export default coinSlice.reducer;
export const { setCurrentPage, setSearchTerm} = coinSlice.actions;