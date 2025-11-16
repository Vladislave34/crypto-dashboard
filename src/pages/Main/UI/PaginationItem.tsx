import type {FC} from "react";
import {useAppDispatch} from "../../../hooks/redux.ts";
import {setCurrentPage} from "../../../store/reducers/coinSlice"

interface Num{
    num: number
}

const PaginationItem : FC<Num> = ({num}) => {
    const dispatch  = useAppDispatch();
    return (
        <div
            className="bg-white text-base cursor-pointer
            font-semibold text-gray-600 border-2
            border-gray-300 rounded-xl h-10 w-10 flex
            justify-center items-center hover:bg-gray-50 transition-colors"
            onClick={()=>dispatch(setCurrentPage(num))}
        >
            {num}
        </div>
    );
};

export default PaginationItem;