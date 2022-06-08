import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LogoutIcon from "@mui/icons-material/Logout";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ListIcon from "@mui/icons-material/List";
import { NavigationStyles } from "./NavigationStyles";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navigateToProjects = () => {
    navigate("/projects");
  };
  const navigateToCreate = () => {
    navigate("/create");
  };
  const navigateToMyProjects = () => {
    navigate("/myprojects");
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
              pathname === "/myprojects" ? "navBar active" : "navBar inactive"
            }
            label="Mine"
            icon={<QueueMusicIcon />}
          />

          <BottomNavigationAction
            onClick={navigateToCreate}
            className={
              pathname === "/create" ? "navBar active" : "navBar inactive"
            }
            label="Create"
            icon={<PlaylistAddIcon />}
          />

          <BottomNavigationAction
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
