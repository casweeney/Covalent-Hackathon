import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const tokenForNetwork = async () => {
  const response = await fetch(
    "https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/?quote-currency=USD&format=JSON&page-size=10&page-number=&key=ckey_c9ceec82b70743a0b334b50ec49"
  );

  const data = await response.json();
  const dataItems = data.data.items;
  console.log(dataItems);

  const chainNames = data.data.items.for((name) => {
    return name.contract_ticker_symbol;
  });
  console.log(chainNames);

  const swapCount = data.data.items.for((swap) => {
    return swap.swap_count_24h;
  });
  console.log(swapCount);
};

export function DoughnutChart(props) {
  useEffect(() => {
    // getUniswapTokens();
    tokenForNetwork();
  }, []);
  console.log(props);
  return <Doughnut data={data} />;
}
