import type {ICoin} from "../models/ICoin.ts";
import {type FC} from "react";
import { FaRegHeart } from "react-icons/fa";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {addFavCoins, removeFavCoins} from "../../../store/reducers/coinSlice.ts";
import { FaHeart } from "react-icons/fa";
import {useNavigate} from "react-router-dom";


interface CoinRowProps {
    Coin: ICoin;
}

const CoinRow : FC<CoinRowProps> = ({Coin}) => {


    const dispatch  = useAppDispatch();
    const fav = useAppSelector(state =>
        state.coinReducer.FavCoins.some(x => x.name === Coin.name)
    );
    const navigate = useNavigate();


    return (

        <tr className="hover:bg-gray-50" onClick={()=>navigate(`/Coin/${Coin.id}`, {state: Coin})}>

            <td className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900">
                <img src={Coin.image} alt={Coin.name}
                     className="w-5 h-5"/>
                {Coin.name}
            </td>
            <td className="px-6 py-4 font-semibold">${Coin.current_price}</td>
            <td className={`px-6 py-4 ${Coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'} font-semibold`}>{Number(Coin.price_change_percentage_24h.toFixed(2)) > 0 ? "+" : ''}{Number(Coin.price_change_percentage_24h.toFixed(2))}%</td>
            <td className="px-6 py-4 text-left font-semibold">${Math.floor(Coin.market_cap/1000000000)}B</td>
            <td className="px-6 py-4 text-center align-middle">
                <div className="flex justify-center items-center">
                    {fav ?
                        <FaHeart className="text-gray-600 text-lg" onClick={
                            (e)=> {
                                e.stopPropagation();
                                dispatch(removeFavCoins(Coin));

                            }}
                        />
                        :
                        <FaRegHeart className="text-gray-600 text-lg hover:cursor-pointer"
                                    onClick={(e)=>{
                                        e.stopPropagation();
                                        dispatch(addFavCoins(Coin));


                                    }
                                        }/>

                    }

                </div>
            </td>

        </tr>

    );
};

export default CoinRow;