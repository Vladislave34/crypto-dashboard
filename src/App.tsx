
import './App.css'
// import {Chart as ChartJS} from "chart.js/auto"
// import {Line} from 'react-chartjs-2'
import Main from "./pages/Main/modules/Main.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CoinPage from "./pages/CoinDetails/modules/CoinPage.tsx";
import FavPage from "./pages/FavList/modules/FavPage.tsx";
// import {useEffect} from "react";
// import {useEffect} from "react";
function App() {
    // useEffect(() => {
    //     fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily",{
    //         headers: {
    //             "x-cg-demo-api-key": "CG-woqFDSSSzL9EAyj5tSqHk1ZE"
    //         }}
    //     )
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // }, []);

  return (
      <div
          className="
                h-screen w-screen flex justify-center items-center p-10
                bg-[#E0CDCC]
                ">
          <BrowserRouter>
              <Routes>
                  <Route path="/Home" element={<Main />} />
                  <Route path="/Coin/:Id" element={<CoinPage />} />
                  <Route path="/Favorite" element={<FavPage />} />
                  <Route path="*" element={<Navigate to="/Home" replace />}  />
              </Routes>
          </BrowserRouter>


      </div>
  )
}

export default App
