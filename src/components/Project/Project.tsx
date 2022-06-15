import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProject } from "../../types/ProjectsTypes";
import { ProjectStyles } from "./ProjectStyles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteProjectThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { useNavigate, useParams } from "react-router-dom";
import { RolesIcons } from "./RolesIcons/RolesIcons";

interface ProjectProps {
  project: IProject;
}

const Project = ({
  project: { name, genres, image, imagebackup, roles, id, owner, description },
}: ProjectProps): JSX.Element => {
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

  const srcErrorHandler = (error: any) => {
    let backupSrc = imagebackup
      ? imagebackup
      : "/images/default-project-image.webp";
    (error.target as HTMLImageElement).onerror = null;
    (error.target as HTMLImageElement).src = backupSrc;
  };

  return (
    <ProjectStyles>
      <Card className="project">
        <div className="project__cover">
          <Typography
            className="project__cover__name"
            gutterBottom
            variant="h3"
          >
            {name?.toUpperCase()}
          </Typography>

          <CardMedia
            className="project__cover__image"
            component="img"
            alt={`Project ${name}`}
            height="360"
            width="450"
            src={`${url}uploads/${image}`}
            onError={srcErrorHandler}
          />
          <Typography
            className={
              projectIdDetails
                ? "project__cover__description--details"
                : "project__cover__description"
            }
          >
            {description}
          </Typography>
        </div>

        <CardContent className="project__details">
          <div
            className={
              projectIdDetails
                ? "project__details__needs--hiden"
                : "project__details__needs"
            }
          >
            <span className="project__details__needs genres">
              THIS{" "}
              {`${
                genresUppercase.slice(0, -1).join(", ") +
                " & " +
                genresUppercase.slice(-1)
              }`}{" "}
              PROJECT NEEDS:
            </span>
            <span className="project__details__needs roles">
              {`${
                rolesFirstLetterUpperCase.slice(0, -1).join(", ") +
                " & " +
                rolesFirstLetterUpperCase.slice(-1)
              }`}{" "}
            </span>
          </div>
          <div
            key={id + "details"}
            className={
              projectIdDetails ? "project__roles--details" : "project__roles"
            }
          >
            <RolesIcons roles={roles} />
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
        </CardContent>
      </Card>
    </ProjectStyles>
  );
};

export default Project;
