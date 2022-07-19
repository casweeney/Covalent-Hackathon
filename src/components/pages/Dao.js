import { useEffect, useState } from "react";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import Organizations from "../Organizations";
import { DoughnutChart } from "../charts/Doughnut";
import { PieChart } from "../charts/Pie";
import { RadarChart } from "../charts/Radar";
import { PolarChart } from "../charts/Polar";

const Dao = () => {
  const [uniswapToken, setUniswapTokens] = useState([]);
  const [tokenIndex, setTokenIndex] = useState([]);

  const getUniswapTokens = async () => {
    const response = await fetch(
      "https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/?quote-currency=USD&format=JSON&page-number=1&page-size=20&key=ckey_c9ceec82b70743a0b334b50ec49"
    );
    const data = await response.json();
    setUniswapTokens(data.data.items);
  };

  useEffect(() => {
    getUniswapTokens();
    tokenForNetwork();
  }, []);
  const tokenForNetwork = async () => {
    const response = await fetch(
      "https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/?quote-currency=USD&format=JSON&page-size=10&page-number=&key=ckey_c9ceec82b70743a0b334b50ec49"
    );

    const data = await response.json();
    const dataItems = data.data.items;
    setTokenIndex(dataItems);
    return dataItems;
  };
  return (
    <div className="flex">
      <SideNav />

      <div className="flex-1">
        <TopNav />

        <div className="bg-indigo-200 m-7 p-6">
          <div className="text-4xl text-gray-800 font-medium">
            Track DeFi and DAO Portfolios
          </div>
          <div className="mt-4">
            View all your DeFi investments and DAO analytics in a single
            dashboard!
          </div>
        </div>

        <div className="flex m-7 space-x-6">
          <div className="w-1/2 bg-white p-4">
            <div className="font-bold text-xl text-gray-700">
              Total treasury
            </div>
            <span className="font-bold text-3xl">$25,647</span>
            <span className="bg-green-500 text-white p-1 rounded-full text-sm font-bold align-text-top">
              +58%
            </span>
            <DoughnutChart tokenIndex={tokenIndex} />
          </div>

          <div className="w-1/2 bg-white p-4">
            <div className="font-bold text-xl text-gray-700">
              Voter & proposal makers
            </div>
            <span className="font-bold text-3xl">$25,647</span>
            <span className="bg-red-500 text-white p-1 rounded-full text-sm font-bold align-text-top">
              -9%
            </span>
            <PieChart />
          </div>
        </div>

        <div className="flex m-7 space-x-6">
          <div className="w-1/2 bg-white p-4">
            <div className="font-bold text-xl text-gray-700">
              Orgs. over threshold <sub>USD</sub>
            </div>
            <span className="font-bold text-3xl">$25,647</span>
            <span className="bg-green-500 text-white p-1 rounded-full text-sm font-bold align-text-top">
              +58%
            </span>
            <RadarChart />
          </div>

          <div className="w-1/2 bg-white p-4">
            <div className="font-bold text-xl text-gray-700">
              Orgs. over threshold <sub>Token holders</sub>
            </div>
            <span className="font-bold text-3xl">$25,647</span>
            <span className="bg-red-500 text-white p-1 rounded-full text-sm font-bold align-text-top">
              -9%
            </span>
            <PolarChart />
          </div>
        </div>

        <Organizations tokens={uniswapToken} />
      </div>
    </div>
  );
};

export default Dao;
