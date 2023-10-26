import { useSearchParams } from "react-router-dom";
import LoadMore from "../views/LoadMore";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    const pageNumber = params.get("page");
    setParams({ page: +pageNumber + 1 });
  };
  return <LoadMore handleClick={handleClick} />;
};

export default LoadMoreController;
