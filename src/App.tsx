import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import Spinner from "./components/Spinner/Spinner";
import CreateProjectPage from "./pages/CreateProjectPage/CreateProjectPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserProjectsPage from "./pages/UserProjectsPage/UserProjectsPage";
import { spinnerState } from "./redux/features/uiSlice/uiSlice";
import { userLoginActionCreator } from "./redux/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { UserLoggedIn } from "./types/UserTypes";

function App(): JSX.Element {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const spinnerIsVisible = useAppSelector(spinnerState);
  const { pathname } = useLocation();

  useEffect(() => {
    if (token as string) {
      const user: UserLoggedIn = jwtDecode(token as string);

      dispatch(userLoginActionCreator(user));
    }
  }, [dispatch, token]);

  return (
    <>
      <Spinner visible={spinnerIsVisible} />
      <Header />
      {pathname.includes("project") && <Navigation />}

      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <ProjectsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/myprojects"
          element={
            <PrivateRoute>
              <UserProjectsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-project"
          element={
            <PrivateRoute>
              <CreateProjectPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
