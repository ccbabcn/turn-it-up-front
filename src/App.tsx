import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import NotLoggedChecker from "./components/NotLoggedChecker/NotLoggedChecker";
import LoggedChecker from "./components/LoggedChecker/LoggedChecker";
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
            <LoggedChecker>
              <LoginPage />
            </LoggedChecker>
          }
        />
        <Route
          path="/register"
          element={
            <LoggedChecker>
              <RegisterPage />
            </LoggedChecker>
          }
        />
        <Route
          path="/projects"
          element={
            <NotLoggedChecker>
              <ProjectsPage />
            </NotLoggedChecker>
          }
        />
        <Route
          path="/my-projects"
          element={
            <NotLoggedChecker>
              <UserProjectsPage />
            </NotLoggedChecker>
          }
        />
        <Route
          path="/create-project"
          element={
            <NotLoggedChecker>
              <CreateProjectPage />
            </NotLoggedChecker>
          }
        />
        <Route
          path="/edit-project/:id"
          element={
            <NotLoggedChecker>
              <CreateProjectPage />
            </NotLoggedChecker>
          }
        />
      </Routes>
    </>
  );
}

export default App;
