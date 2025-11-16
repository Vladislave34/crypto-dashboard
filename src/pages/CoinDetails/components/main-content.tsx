// import {useParams} from "react-router-dom";
// import {postApi} from "../../../services/CoinService.ts";
// import {useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";
import Diagrams from "../UI/Diagrams.tsx";
import Information from "./Information.tsx";



const MainContent = () => {
    const { state } = useLocation(); // тут буде твій об’єкт
    const { Id } = useParams(); // тут буде параметр із URL, якщо треба

    console.log("ID з URL:", Id);
    console.log("Об’єкт зі state:", state);

    return (
        <div className="flex justify-between  max-h-[80%] m-5 ">

            <Diagrams coin={state} />
            <Information coin={state} />
        </div>
    );
};

export default MainContent;