import jwtDecode from "jwt-decode";
import { Route, Routes } from "react-router-dom";
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
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App(): JSX.Element {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const userIsLogged = useAppSelector((state) => state.user.logged);

  const spinnerIsVisible = useAppSelector(spinnerState);

  if (!userIsLogged) {
    try {
      const user: UserLoggedIn = jwtDecode(token as string);
      dispatch(userLoginActionCreator(user));
    } catch (error) {}
  }

  return (
    <>
      <Spinner visible={spinnerIsVisible} />
      <Routes>
        <Route
          path="/"
          element={
            <NotLoggedChecker>
              <ProjectsPage />
            </NotLoggedChecker>
          }
        />

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
        <Route
          path="/project/:id"
          element={
            <NotLoggedChecker>
              <ProjectDetailsPage />
            </NotLoggedChecker>
          }
        />
        <Route
          path="*"
          element={
            <NotLoggedChecker>
              <ErrorPage />
            </NotLoggedChecker>
          }
        />
      </Routes>
    </>
  );
}

export default App;
