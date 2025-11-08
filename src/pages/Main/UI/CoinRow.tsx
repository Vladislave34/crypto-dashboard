import type {ICoin} from "../models/ICoin.ts";
import type {FC} from "react";

interface CoinRowProps {
    Coin: ICoin;
}

const CoinRow : FC<CoinRowProps> = ({Coin}) => {
    return (
        <tr className="hover:bg-gray-50">
            <td className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900">
                <img src={Coin.image} alt="Bitcoin"
                     className="w-5 h-5"/>
                {Coin.name}
            </td>
            <td className="px-6 py-4 font-semibold">${Coin.current_price}</td>
            <td className={`px-6 py-4 ${Coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'} font-semibold`}>{Number(Coin.price_change_percentage_24h.toFixed(2))}%</td>
            <td className="px-6 py-4 text-left font-semibold">${Math.floor(Coin.market_cap/1000000000)}B</td>
        </tr>
    );
};

export default CoinRow;