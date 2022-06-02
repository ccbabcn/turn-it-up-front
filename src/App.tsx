import { Navigate, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App(): JSX.Element {
  return (
    <>
      <Spinner visible={true} />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
