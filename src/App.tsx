import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Spinner from "./components/Spinner/Spinner";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { spinnerState } from "./redux/features/uiSlice/uiSlice";
import { useAppSelector } from "./redux/hooks";

function App(): JSX.Element {
  const spinnerIsVisible = useAppSelector(spinnerState);
  const { pathname } = useLocation();

  return (
    <>
      <Spinner visible={spinnerIsVisible} />
      <Header />
      {pathname.includes("projects") && <Navigation />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <ProjectsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
