import type {ICoin} from "../../Main/models/ICoin.ts";
import type {FC} from "react";
import Arounder from "../../../../helper/Arounder.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {addFavCoins, removeFavCoins} from "../../../store/reducers/coinSlice.ts";
import {useNavigate} from "react-router-dom";

interface CoinFavProps {
    Coin: ICoin;
}
const FavCoin : FC<CoinFavProps> = ({Coin}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const fav = useAppSelector(state =>
        state.coinReducer.FavCoins.some(x => x.name === Coin.name));

    return (
        <div className="cursor-pointer m-3 md:m-5 rounded-2xl border-2 border-gray-400 flex flex-col md:flex-row justify-between items-stretch p-4 md:p-5 gap-4 md:gap-0" onClick={()=>navigate(`/Coin/${Coin.id}`, {state: Coin})}>

            {/* Ліва частина: іконка + назва */}
            <div className="flex items-center gap-3 md:gap-5 mb-3 md:mb-0">
                <img src={Coin.image} alt={Coin.name} className="w-10 h-10 md:w-12 md:h-12"/>
                <div className="text-lg md:text-xl font-semibold">{Coin.name}</div>
            </div>

            <div className='flex flex-row'>
            <div className="flex items-center gap-3 md:gap-5 border-l-0  border-t-2 md:border-t-0 border-gray-400 pl-0 md:pl-5 pt-3 md:pt-0 font-semibold">
                <span className="flex items-center">${Coin.current_price}</span>
                <span className="flex items-center">${Arounder(Coin.market_cap)}</span>
                <span className={`flex items-center ${Coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {Number(Coin.price_change_percentage_24h.toFixed(2))}%
            </span>
            </div>

            {/* Права частина: фаворит */}
            <div className="flex items-center ml-3 md:ml-5">
                {fav ? (
                    <FaHeart
                        className="text-gray-600 text-lg cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(removeFavCoins(Coin));
                        }}
                    />
                ) : (
                    <FaRegHeart
                        className="text-gray-600 text-lg cursor-pointer hover:text-red-600"
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(addFavCoins(Coin));
                        }}
                    />
                )}
            </div>
            </div>
        </div>
    );
};

export default FavCoin;