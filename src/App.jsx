import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import MainPageController from "./controllers/MainPageController";
import HeaderView from "./views/HeaderView";
import DetailController from "./controllers/DetailController";
import Intro from "./pages/Intro";
import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    <>
      <HeaderView />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/coins" element={<MainPageController />} />
        <Route path="/coin/:id" element={<DetailController />} />
      </Routes>
    </>
  );
}

export default App;
