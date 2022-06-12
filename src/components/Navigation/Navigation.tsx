import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LogoutIcon from "@mui/icons-material/Logout";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ListIcon from "@mui/icons-material/List";
import { NavigationStyles } from "./NavigationStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userLogOutActionCreator } from "../../redux/features/userSlice/userSlice";

const Navigation = (): JSX.Element => {
  const actualUser = useAppSelector((state) => state.user);
  const dispact = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navigateToProjects = () => {
    navigate("/projects");
  };
  const navigateToCreate = () => {
    navigate("/create-project");
  };
  const navigateToMyProjects = () => {
    navigate("/my-projects");
  };
  const logOutOnClick = () => {
    localStorage.removeItem("token");
    dispact(userLogOutActionCreator(actualUser));
  };

  return (
    <NavigationStyles>
      <Box sx={{ percentage: 100 }}>
        <BottomNavigation
          sx={{ bgcolor: "#261132", color: "#fdfffc" }}
          showLabels
        >
          <BottomNavigationAction
            onClick={navigateToProjects}
            className={
              pathname === "/projects" ? "navBar active" : "navBar inactive"
            }
            label="All"
            icon={<ListIcon />}
          />

          <BottomNavigationAction
            onClick={navigateToMyProjects}
            className={
              pathname === "/my-projects" ? "navBar active" : "navBar inactive"
            }
            label="Mine"
            icon={<QueueMusicIcon />}
          />

          <BottomNavigationAction
            onClick={navigateToCreate}
            className={
              pathname === "/create-project"
                ? "navBar active"
                : "navBar inactive"
            }
            label="Create"
            icon={<PlaylistAddIcon />}
          />

          <BottomNavigationAction
            onClick={logOutOnClick}
            className="navBar"
            label="Logout"
            icon={<LogoutIcon />}
          />
        </BottomNavigation>
      </Box>
    </NavigationStyles>
  );
};

export default Navigation;
