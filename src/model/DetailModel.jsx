import { SiCoinmarketcap } from "react-icons/si";
import {
  TbWorldDollar,
  TbAdjustmentsDollar,
  TbShoppingCartDollar,
  TbPercentage,
} from "react-icons/tb";
import millify from "millify";

export class InfoLabel {
  constructor(coin, history) {
    this.coin = coin;
    this.infoFields = [
      {
        icon: <TbWorldDollar />,
        label: "Price",
        value: `$ ${parseFloat(this.coin?.priceUsd).toFixed(2)}`,
      },
      {
        icon: <TbPercentage />,
        label: "Volume (24h)",
        value: `${parseFloat(this.coin?.changePercent24Hr).toFixed(2)} %`,
      },
      {
        icon: <SiCoinmarketcap />,
        label: "Market Cap",
        value: `$ ${millify(this.coin?.marketCapUsd)}`,
      },
      {
        icon: <TbShoppingCartDollar />,
        label: "Total Supply",
        value: `${millify(this.coin?.supply)} ${this.coin?.symbol}`,
      },
      {
        icon: <TbAdjustmentsDollar />,
        label: "Volume Usd(24h)",
        value: `$ ${millify(this.coin?.volumeUsd24Hr)}`,
      },
    ];

    this.chartData = {
      labels: history?.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          label: "Price Value",
          data: history?.map((i) => Number(i.priceUsd).toFixed(2)),
        },
      ],
    };
  }
}
