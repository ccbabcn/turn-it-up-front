import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProject } from "../../types/ProjectsTypes";
import { ProjectStyles } from "./ProjectStyles";
import {
  GiGuitarBassHead,
  GiGuitarHead,
  GiMicrophone,
  GiDrumKit,
  GiMusicalKeyboard,
  GiMusicSpell,
} from "react-icons/gi";
import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteProjectThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  project: IProject;
}

const Project = ({
  project: { name, genres, image, imagebackup, roles, id, owner, description },
}: Props): JSX.Element => {
  const { id: projectIdDetails } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteProject = () => {
    dispatch(deleteProjectThunk(id));
  };

  const navigateToEdit = () => {
    navigate(`/edit-project/${id}`);
  };

  const navigateToProjects = () => {
    navigate(`/projects/`);
  };

  const navigateToDetails = () => {
    navigate(`/project/${id}`);
  };

  const userId = useAppSelector((state) => state.user.id);

  const genresUppercase = genres?.map((genre) => genre.toUpperCase());
  const rolesFirstLetterUpperCase = roles?.map(
    (role) => role.charAt(0).toUpperCase() + role.slice(1)
  );
  const url = process.env.REACT_APP_API_URL as string;

  return (
    <ProjectStyles>
      <Card className="project">
        <CardMedia
          className="project__image"
          component="img"
          alt={`Project ${name}`}
          height="330"
          src={`${url}uploads/${image}`}
          onError={(error: any) => {
            let backupSrc = imagebackup
              ? imagebackup
              : "./images/default-project-image.jpg";
            (error.target as HTMLImageElement).onerror = null;
            (error.target as HTMLImageElement).src = backupSrc;
          }}
        />
        <CardContent className="project__details">
          <div className="project__name">
            <Typography gutterBottom variant="h3">
              {name?.toUpperCase()}
            </Typography>
          </div>
          {!projectIdDetails && (
            <Typography
              className="project__description"
              variant="body2"
              color="text.secondary"
            >
              <span className="project__genres">
                THIS{" "}
                {`${
                  genresUppercase.slice(0, -1).join(", ") +
                  " & " +
                  genresUppercase.slice(-1)
                }`}{" "}
                PROJECT NEEDS:
              </span>
              <span className="project__roles">
                {`${
                  rolesFirstLetterUpperCase.slice(0, -1).join(", ") +
                  " & " +
                  rolesFirstLetterUpperCase.slice(-1)
                }`}{" "}
              </span>
            </Typography>
          )}
          {projectIdDetails && (
            <Typography className="project__description">
              {description}
            </Typography>
          )}
        </CardContent>

        <div
          key={id + "details"}
          className={
            projectIdDetails
              ? `project__genre-icons--details-version`
              : `project__genre-icons`
          }
        >
          {roles.map((role: string, index, array) => {
            let currentIcon: ReactElement;
            let limit: number = projectIdDetails ? array.length : 3;
            if (index < limit) {
              switch (role) {
                case "guitarrist":
                  currentIcon = (
                    <div
                      key={index + id}
                      className={
                        projectIdDetails && "details-icon-main-container"
                      }
                    >
                      <div title="guitarrist" className="icon-container">
                        <GiGuitarHead className={"icon"} />
                      </div>
                      <span>
                        {projectIdDetails && `This projects needs a ${role}`}
                      </span>
                    </div>
                  );
                  break;
                case "drummer":
                  currentIcon = (
                    <div
                      key={index + id}
                      className={
                        projectIdDetails && "details-icon-main-container"
                      }
                    >
                      <div title="drummer" className="icon-container">
                        <GiDrumKit className={"icon"} />
                      </div>
                      <span>
                        {projectIdDetails && `This projects needs a ${role}`}
                      </span>
                    </div>
                  );
                  break;
                case "bassplayer":
                  currentIcon = (
                    <div
                      key={index + id}
                      className={
                        projectIdDetails && "details-icon-main-container"
                      }
                    >
                      <div title="bassplayer" className="icon-container">
                        <GiGuitarBassHead className={"icon"} />
                      </div>
                      <span>
                        {projectIdDetails && `This projects needs a ${role}`}
                      </span>
                    </div>
                  );
                  break;
                case "singer":
                  currentIcon = (
                    <div
                      key={index + id}
                      className={
                        projectIdDetails && "details-icon-main-container"
                      }
                    >
                      <div title="singer" className="icon-container">
                        <GiMicrophone className={"icon"} />
                      </div>
                      <span>
                        {projectIdDetails && `This projects needs a ${role}`}
                      </span>
                    </div>
                  );
                  break;
                case "keyboard":
                  currentIcon = (
                    <div
                      key={index + id}
                      className={
                        projectIdDetails && "details-icon-main-container"
                      }
                    >
                      <div title="keyboard" className="icon-container">
                        <GiMusicalKeyboard className={"icon"} />
                      </div>
                      <span>
                        {projectIdDetails && `This projects needs a ${role}`}
                      </span>
                    </div>
                  );
                  break;
                default:
                  currentIcon = (
                    <div
                      key={index + id}
                      className={
                        projectIdDetails && "details-icon-main-container"
                      }
                    >
                      <div title="other" className="icon-container">
                        <GiMusicSpell className={"icon"} />
                      </div>
                      <span>
                        {projectIdDetails &&
                          `This projects is also looking for other types of musicians`}
                      </span>
                    </div>
                  );
                  break;
              }
              return currentIcon;
            }
            if (!projectIdDetails) {
              if (index === 3) {
                currentIcon = (
                  <div key={index + id} className="icon-container">
                    +{array.length - 3}
                  </div>
                );
                return currentIcon;
              }
            }
            return null;
          })}
        </div>
        {projectIdDetails && (
          <Typography className="project__author">
            {`This project was created by ${owner}`}
          </Typography>
        )}
        <CardActions className="project__actions">
          {owner === userId && (
            <Button
              className="project__actions--info"
              size="small"
              onClick={navigateToEdit}
            >
              EDIT
            </Button>
          )}
          {owner !== userId && (
            <Button
              className="project__actions--info"
              size="small"
              onClick={
                projectIdDetails ? navigateToProjects : navigateToDetails
              }
            >
              {projectIdDetails ? "RETURN" : "+ INFO"}
            </Button>
          )}
          <Button className="project__actions--join" size="small">
            JOIN
          </Button>
          {owner === userId && (
            <Button
              className="project__actions--delete"
              size="small"
              onClick={deleteProject}
            >
              DELETE
            </Button>
          )}
        </CardActions>
      </Card>
    </ProjectStyles>
  );
};

export default Project;
