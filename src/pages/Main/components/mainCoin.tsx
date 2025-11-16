import { useAppSelector} from "../../../hooks/redux.ts";
import {postApi} from "../../../services/CoinService.ts";
// import {useEffect} from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import {useEffect, useState} from "react";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const MainCoin = () => {
    // const dispatch = useAppDispatch();
    const inf = useAppSelector(state => state.coinReducer.mainCoin);
    const [days, setDays] = useState(30)
    const {data, isLoading} = postApi.useFetchСoinByIdQuery({days : days, coin : inf});
    const formattedData = (data?.prices as [number, number][] ?? []).map(([timestamp, price]) => ({
        date: new Date(timestamp).toLocaleDateString(),
        price: price.toFixed(2),
    }));
    useEffect(() => {
        console.log(inf);
        console.log(data);
    }, [inf]);
    const chartData = {
        labels: formattedData?.map(p => p.date) || [],
        datasets: [
            {
                label: `${inf.name}`,
                data: formattedData?.map(p => p.price) || [],
                borderColor: "#4f46e5",
                backgroundColor: "rgba(79, 70, 229, 0.2)",
                tension: 0,
                fill: true,
                pointRadius: 0,
            }
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: { display: false},
            tooltip: { mode: 'index' as const, intersect: false },
        },
        scales: {
            x: {
                display: false, // прибираємо підписи по осі X
                grid: { drawTicks: false, drawBorder: false },
            },
            y: {
                display: false, // прибираємо підписи по осі Y
                grid: { drawTicks: false, drawBorder: false },
            },
        },
    };

    // useEffect(() => {console.log(data)}, [data]);
    return (
<>
        {isLoading || !inf ? (
            <div className="w-full h-96 flex justify-center items-center ">
                <div role="status">
                    <svg aria-hidden="true"
                         className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ) : (
            <div className="border-gray-400 border-2 rounded-xl w-[35%] h-[68.5vh] p-5">
                <div className="flex flex-col gap-2">
                    <div className="text-3xl font-semibold">
                        {inf.name} ({inf.symbol.toUpperCase()})
                    </div>
                    <div className="text-2xl font-semibold">
                        ${inf.current_price}
                    </div>
                    <div className={`text-xl font-semibold ${inf.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {inf.price_change_percentage_24h > 0 ? "+" : ""}{inf.price_change_percentage_24h.toFixed(2)}%
                    </div>
                </div>

                <div className="" >
                    {chartData?.labels?.length ? (
                        <Line data={chartData} options={options} />
                    ) : (
                        <div className="text-center text-gray-500">No chart data available</div>
                    )}
                </div>
                <div className="flex flex-row justify-start gap-12 text-gray-500 text-base overflow-x-auto">
                    <span className={`cursor-pointer  ${days ===1 ? "bg-gray-200  rounded-lg px-2" : ''} `} onClick={()=>setDays(1)}>1D</span>
                    <span className={`cursor-pointer ${days ===7 ? "bg-gray-200  rounded-lg px-2" : ''} `} onClick={()=>setDays(7)}>1W</span>
                    <span className={`cursor-pointer ${days ===30 ? "bg-gray-200  rounded-lg px-2" : ''} `} onClick={()=>setDays(30)}>1M</span>
                    <span className={`cursor-pointer ${days ===365 ? "bg-gray-200  rounded-lg px-2" : ''} `} onClick={()=>setDays(365)}>1Y</span>

                </div>

                <div className="mt-3">
                    <div className='text-lg font-semibold'>Details</div>
                    <div className='mt-2'>
                        <div className='border-b border-gray-200 py-2 flex justify-between'>
                            <span>Market cap</span>
                            <span>${Math.floor(inf.market_cap / 1e9)}B</span>
                        </div>

                        <div className='border-b border-gray-200 py-2 flex justify-between'>
                            <span>High 24h</span>
                            <span>${inf.high_24h}</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
</>
    );
};

export default MainCoin;