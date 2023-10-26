import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const HeaderView = () => {
  const { user, logoutUser, currentUser } = useContext(UserContext);
  console.log(user, currentUser?.isCurrent);
  if (user?.email || currentUser?.isCurrent) {
    return (
      <header className="container">
        <Link to="/coins">
          <img src="/logo.png" />
        </Link>
        <div className="right">
          {currentUser?.email && <p>{currentUser.email}</p>}
          {user?.email && <p>{user.email}</p>}
          <button onClick={logoutUser}>Log out</button>
        </div>
      </header>
    );
  }
};

export default HeaderView;
