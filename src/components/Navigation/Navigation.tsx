import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LogoutIcon from "@mui/icons-material/Logout";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import ListIcon from "@mui/icons-material/List";
import { NavigationStyles } from "./NavigationStyles";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navigateToProjects = () => {
    navigate("/projects");
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
            label="All projects"
            icon={<ListIcon />}
          />

          <BottomNavigationAction
            className={
              pathname === "/myprojects" ? "navBar active" : "navBar inactive"
            }
            label="My projects"
            icon={<QueueMusicIcon />}
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
