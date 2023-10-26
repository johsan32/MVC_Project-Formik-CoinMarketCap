import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro">
      <img className="screen-lg" src="intro2.png" alt="" />
      <img className="screen-md" src="intro.png" alt="" />
      <Link to="/login">
        <button className="login">Login</button>
      </Link>
      <Link to="/register">
        <button className="register">Register</button>
      </Link>
    </div>
  );
};

export default Intro;
