import CoinsList from "./coinsList.tsx";
import Search from "../UI/Search.tsx";


const ShowCoin = () => {
    return (
        <div className="border-gray-400 border-2 rounded-xl w-[60%]  ">
            <Search />
            <CoinsList />
        </div>
    );
};

export default ShowCoin;