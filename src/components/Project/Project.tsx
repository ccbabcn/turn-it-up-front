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

interface Props {
  project: IProject;
}

const Project = ({
  project: { name, genres, image, roles, id },
}: Props): JSX.Element => {
  const genresUppercase = genres?.map((genre) => genre.toUpperCase());
  const rolesFirstLetterUpperCase = roles?.map(
    (role) => role.charAt(0).toUpperCase() + role.slice(1)
  );

  return (
    <ProjectStyles>
      <Card className="project" sx={{ maxWidth: 450 }}>
        <CardMedia
          className="project__image"
          component="img"
          alt={`Project ${name}`}
          height="330"
          image={image}
        />
        <CardContent className="project__details">
          <div className="project__name">
            <Typography gutterBottom variant="h3">
              {name?.toUpperCase()}
            </Typography>
          </div>
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
        </CardContent>

        <div className="project__genre-icons">
          {roles.map((role: string, index, array) => {
            let currentIcon: ReactElement;
            if (index <= 3) {
              switch (role) {
                case "guitarrist":
                  currentIcon = (
                    <div
                      key={index + id}
                      title="guitarrist"
                      className="icon-container"
                    >
                      <GiGuitarHead className="icon" />
                    </div>
                  );
                  break;
                case "drummer":
                  currentIcon = (
                    <div
                      key={index + id}
                      title="drummer"
                      className="icon-container"
                    >
                      <GiDrumKit className="icon" />
                    </div>
                  );
                  break;
                case "bass player":
                  currentIcon = (
                    <div
                      key={index + id}
                      title="bassplayer"
                      className="icon-container"
                    >
                      <GiGuitarBassHead className="icon" />
                    </div>
                  );
                  break;
                case "singer":
                  currentIcon = (
                    <div
                      key={index + id}
                      title="singer"
                      className="icon-container"
                    >
                      <GiMicrophone className="icon" />
                    </div>
                  );
                  break;
                case "keyboard":
                  currentIcon = (
                    <div
                      key={index + id}
                      title="keyboard"
                      className="icon-container"
                    >
                      <GiMusicalKeyboard className="icon" />
                    </div>
                  );
                  break;
                default:
                  currentIcon = (
                    <div
                      key={index + id}
                      title="otherrole"
                      className="icon-container"
                    >
                      <GiMusicSpell className="icon" />
                    </div>
                  );
                  break;
              }
              return currentIcon;
            }
            if (index === 4) {
              currentIcon = (
                <div key={index + id} className="icon-container">
                  +{array.length - 3}
                </div>
              );
              return currentIcon;
            }
            return "";
          })}
        </div>
        <CardActions className="project__actions">
          <Button className="project__actions--info" size="small">
            +INFO
          </Button>
          <Button className="project__actions--join" size="small">
            JOIN
          </Button>
          <Button className="project__actions--delete" size="small">
            DELETE
          </Button>
        </CardActions>
      </Card>
    </ProjectStyles>
  );
};

export default Project;
