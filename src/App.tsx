import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Spinner from "./components/Spinner/Spinner";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { spinnerState } from "./redux/features/uiSlice/uiSlice";
import { useAppSelector } from "./redux/hooks";

function App(): JSX.Element {
  const spinnerIsVisible = useAppSelector(spinnerState);
  const { pathname } = useLocation();

  return (
    <>
      <Spinner visible={spinnerIsVisible} />
      {pathname === "/login" && <Navigation />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
