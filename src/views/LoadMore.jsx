const LoadMore = ({ handleClick }) => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <button className="btn btn-primary px-5" onClick={handleClick}>
        More...
      </button>
    </div>
  );
};

export default LoadMore;
