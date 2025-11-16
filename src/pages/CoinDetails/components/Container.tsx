import Header from "./Header.tsx";
import MainContanet from "../../CoinDetails/components/main-content.tsx";


const Container = () => {
    return (
        <div className="  w-screen h-screen   p-10">
            <div className="rounded-xl  bg-white w-full h-full">
                <Header />

                <MainContanet />


            </div>

        </div>
    );
};

export default Container;