import Header from "../components/Header.tsx";
import MainContanet from "../components/main-contanet.tsx";


const Container = () => {
    return (
        <div className=" rounded-xl w-full h-full bg-white">
            <Header />

            <MainContanet />
        </div>
    );
};

export default Container;