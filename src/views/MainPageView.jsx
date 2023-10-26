import millify from "millify";
import Loading from "./Loading";
import LoadMoreController from "../controllers/LoadMoreController";
import { useNavigate } from "react-router-dom";

const MainPageView = ({ coins }) => {
  const navigate = useNavigate();
  console.log(coins);
  return (
    <div className="container mt-2">
      {!coins && <Loading />}

      {coins && (
        <table className="table table-striped table-hover">
          <thead>
            <tr className="text-danger fs-6">
              <th className="text-center">#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th>Market Cap</th>
              <th>Volume(24h)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, i) => (
              <tr key={i} onClick={() => navigate(`/coin/${coin.id}`)}>
                <td className="text-center">{i + 1}</td>
                <td className="g-5">
                  <span className="text-info me-2 fw-semi-bold">
                    {coin.symbol}
                  </span>
                  <span>{coin.name}</span>
                </td>
                <td>${Number.parseFloat(coin.priceUsd).toFixed(2)}</td>
                <td
                  className={`change-percent ${
                    coin.changePercent24Hr < 0 ? "negative" : "positive"
                  }`}
                >
                  {coin.changePercent24Hr < 0 ? (
                    <i className="bi bi-caret-down"></i>
                  ) : (
                    <i className="bi bi-caret-up"></i>
                  )}
                  {Number.parseFloat(Math.abs(coin.changePercent24Hr)).toFixed(
                    2
                  )}
                  %
                </td>
                <td>${millify(coin.marketCapUsd)}</td>
                <td>${millify(coin.volumeUsd24Hr)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <LoadMoreController />
    </div>
  );
};

export default MainPageView;
