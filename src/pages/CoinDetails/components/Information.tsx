import type {ICoin} from "../../Main/models/ICoin.ts";
import type {FC} from "react";

import InfoRow from "../UI/InfoRow.tsx";

interface Coin {
    coin: ICoin
}



const Information : FC<Coin> = ({coin}) => {
    return (
        <div className='w-[40%] rounded-xl border-2 border-gray-400 p-5 flex flex-col'>
            <div className='flex flex-row justify-between'>
        <span className='text-3xl font-semibold'>
            {coin.name} ({coin.symbol.toUpperCase()})
        </span>
                <img src={coin.image} alt={coin.name} className="w-12 h-12"/>
            </div>

            <span className='text-2xl font-semibold'>{coin.current_price}$</span>

            <span
                className={`text-xl font-semibold ${
                    coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'
                }`}
            >
        {coin.price_change_percentage_24h > 0 ? "+" : ""}
                {coin.price_change_percentage_24h.toFixed(2)}%
    </span>

            <div className="mt-3">
                <InfoRow label="Market cap" value={coin.market_cap}/>
                <InfoRow label="High 24h" value={coin.high_24h}/>
                <InfoRow label="Circulating Supply" value={coin.circulating_supply}/>
                <InfoRow label="Total Volume" value={coin.total_volume}/>
                <InfoRow label="Total Supply" value={coin.total_supply}/>
                <InfoRow label="Low 24h" value={coin.low_24h}/>
                <InfoRow label="Max Supply" value={coin.max_supply}/>
                <InfoRow label="Fully Diluted Valuation" value={coin.fully_diluted_valuation}/>
            </div>
        </div>
    );
};

export default Information;