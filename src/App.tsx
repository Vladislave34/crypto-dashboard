
import './App.css'
// import {Chart as ChartJS} from "chart.js/auto"
// import {Line} from 'react-chartjs-2'
import Container from "./pages/Main/modules/Container.tsx";
import {useEffect} from "react";
function App() {
    useEffect(() => {
        fetch(
            'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily',
            {
                headers: {
                    'x-cg-demo-api-key': 'CG-woqFDSSSzL9EAyj5tSqHk1ZE'
                }
            }
        )
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }, []);

  return (
      <div
          className="
                h-screen w-screen flex justify-center items-center p-10
                bg-[#E0CDCC]
                ">
        <Container />
      </div>
  )
}

export default App
