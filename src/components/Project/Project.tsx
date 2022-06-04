import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProject } from "../../types/ProjectsTypes";
import { ProjectStyles } from "./ProjectStyles";

interface Props {
  project: IProject;
}

const Project = ({
  project: { name, description, genre, image, roles, id },
}: Props): JSX.Element => {
  const genresUppercase = genre?.map((genre) => genre.toUpperCase());
  const rolesFirstLetterUpperCase = roles?.map(
    (role) => role.charAt(0).toUpperCase() + role.slice(1)
  );

  return (
    <ProjectStyles>
      <Card className="project" sx={{ maxWidth: 345 }}>
        <CardMedia
          className="project__image"
          component="img"
          alt="green iguana"
          height="330"
          image={image}
        />
        <CardContent className="project__details">
          <Typography className="project__name" gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography
            className="project__description"
            variant="body2"
            color="text.secondary"
          >
            <p className="project__genres">
              THIS{" "}
              {`${
                genresUppercase.slice(0, -1).join(", ") +
                " & " +
                genresUppercase.slice(-1)
              }`}{" "}
              PROJECT NEEDS:
            </p>
            <p className="project_roles">
              {`${
                rolesFirstLetterUpperCase.slice(0, -1).join(", ") +
                " & " +
                rolesFirstLetterUpperCase.slice(-1)
              }`}{" "}
            </p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </ProjectStyles>
  );
};

export default Project;
