
import FavoriteCoin from "./favoriteCoin.tsx";
import ShowCoin from "./ShowCoin.tsx";


const MainContanet = () => {
    return (
        <div className="m-10 flex justify-between max-h-[80%] ">
            <ShowCoin />
            <FavoriteCoin />
        </div>
    );
};

export default MainContanet;