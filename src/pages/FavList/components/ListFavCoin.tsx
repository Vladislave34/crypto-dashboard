import {useAppSelector} from "../../../hooks/redux.ts";
import type {ICoin} from "../../Main/models/ICoin.ts";
import FavCoin from "../UI/FavCoin.tsx";


const ListFavCoin = () => {
    const  list   = useAppSelector(state => state.coinReducer.FavCoins);
    return (
        <div className="flex flex-col overflow-y-auto h-full">
            {list.map((coin: ICoin, i: number) => <FavCoin Coin={coin} key={i} />

            )}
        </div>
    );
};

export default ListFavCoin;