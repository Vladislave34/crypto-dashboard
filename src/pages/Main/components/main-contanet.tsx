
import MainCoin from "./mainCoin.tsx";
import ShowCoin from "./ShowCoin.tsx";


const MainContanet = () => {
    return (
        <div className="m-10 flex justify-between h-[80%] ">
            <ShowCoin />
            <MainCoin />
        </div>
    );
};

export default MainContanet;