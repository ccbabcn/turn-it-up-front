import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  createProjectThunk,
  editProjectThunk,
} from "../../../redux/thunks/projectsThunks/projectsThunks";
import { IProject } from "../../../types/ProjectsTypes";
import { FormStyles } from "../FormStyles";

const FormProject = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const projects = useAppSelector((state) => state.projects.results);
  const currentProject = projects.find((project) => project.id === id);

  const blankFields: IProject = {
    name: currentProject?.name || "",
    description: currentProject?.description || "",
    image: currentProject?.image || "",
    genres: currentProject?.genres || [],
    roles: currentProject?.roles || [],
    id: currentProject?.id || "",
    owner: currentProject?.owner || "",
  };

  const [formData, setFormData] = useState<IProject>(blankFields);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (
      formData.name !== "" &&
      formData.description !== "" &&
      formData.image !== "" &&
      formData.genres !== [] &&
      formData.roles !== []
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === "checkbox") {
      const actualField = event.target.name;

      if (actualField === "genres") {
        formData["genres"]?.includes(event.target.value)
          ? formData["genres"].filter((genre) => genre !== event.target.value)
          : setFormData({
              ...formData,
              [event.target.name]: [...formData.genres, event.target.value],
            });
      }
      if (actualField === "roles") {
        formData["roles"]?.includes(event.target.value)
          ? formData["roles"].filter((genre) => genre !== event.target.value)
          : setFormData({
              ...formData,
              [event.target.name]: [...formData.roles, event.target.value],
            });
      }
    }
    if (event.target.type === "text") {
      setFormData({ ...formData, [event.target.id]: event.target.value });
    }
  };

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",
    });
  };

  const submitControl = (
    event: React.FormEvent<HTMLFormElement>,
    projectId: string
  ) => {
    event.preventDefault();

    const newProject = new FormData();
    newProject.append("name", formData.name);
    newProject.append("description", formData.description);
    for (const genre of formData.genres) {
      newProject.append("genres", genre);
    }
    for (const role of formData.roles) {
      newProject.append("roles", role);
    }
    newProject.append("owner", formData.owner);
    newProject.append("id", formData.id);

    newProject.append("image", formData.image);

    if (projectId) {
      dispatch(editProjectThunk(newProject, projectId));
    } else {
      dispatch(createProjectThunk(newProject));
    }
    setFormData(blankFields);
    navigate("/my-projects");
  };

  return (
    <>
      <FormStyles>
        <form
          autoComplete="off"
          noValidate
          onSubmit={(event) => submitControl(event, id as string)}
        >
          <div className="formField">
            <label htmlFor="name">Project name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={changeData}
              placeholder="name"
            />
          </div>
          <div className="formField">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={formData.description}
              onChange={changeData}
              placeholder="description"
            />
          </div>
          <div className="formField imagefield">
            <label htmlFor="image" className="imagefield__label">
              {blankFields.image ? blankFields.image : "Choose image"}
            </label>
            <input
              id="image"
              type="file"
              className="imagefield__input"
              onChange={uploadImage}
            />
          </div>
          <div className="fieldCheckbox">
            <fieldset className="fieldCheckbox__fieldSet">
              <legend>Select genre</legend>
              <div className="fieldCheckbox__checker">
                <label htmlFor="rock" className="form-control">
                  <input
                    type="checkbox"
                    id="rock"
                    name="genres"
                    value="rock"
                    onChange={changeData}
                    checked={formData.genres.includes("rock")}
                  />
                  Rock
                </label>
              </div>
              <div className="fieldCheckbox__checker">
                <label htmlFor="blues" className="form-control">
                  <input
                    type="checkbox"
                    id="blues"
                    name="genres"
                    value="blues"
                    onChange={changeData}
                    checked={formData.genres.includes("blues")}
                  />
                  Blues
                </label>
              </div>
              <div className="fieldCheckbox__checker">
                <label htmlFor="pop" className="form-control">
                  <input
                    type="checkbox"
                    id="pop"
                    name="genres"
                    value="pop"
                    onChange={changeData}
                    checked={formData.genres.includes("pop")}
                  />
                  Pop
                </label>
              </div>
              <div className="fieldCheckbox__checker">
                <label htmlFor="folk" className="form-control">
                  <input
                    type="checkbox"
                    id="folk"
                    name="genres"
                    value="folk"
                    onChange={changeData}
                    checked={formData.genres.includes("folk")}
                  />
                  Folk
                </label>
              </div>
            </fieldset>
          </div>
          <div className="fieldCheckbox">
            <fieldset className="fieldCheckbox__fieldSet">
              <legend>Select roles needed</legend>
              <div className="fieldCheckbox__checker">
                <label htmlFor="guitarrist" className="form-control">
                  <input
                    type="checkbox"
                    id="guitarrist"
                    name="roles"
                    value="guitarrist"
                    onChange={changeData}
                    checked={formData.roles.includes("guitarrist")}
                  />
                  Guitarrist
                </label>
              </div>
              <div className="fieldCheckbox__checker">
                <label htmlFor="singer" className="form-control">
                  <input
                    type="checkbox"
                    id="singer"
                    name="roles"
                    value="singer"
                    onChange={changeData}
                    checked={formData.roles.includes("singer")}
                  />
                  Singer
                </label>
              </div>
              <div className="fieldCheckbox__checker">
                <label htmlFor="bassplayer" className="form-control">
                  <input
                    type="checkbox"
                    id="bassplayer"
                    name="roles"
                    value="bassplayer"
                    onChange={changeData}
                    checked={formData.roles.includes("bassplayer")}
                  />
                  Bassplayer
                </label>
              </div>
              <div className="fieldCheckbox__checker">
                <label htmlFor="drummer" className="form-control">
                  <input
                    type="checkbox"
                    id="drummer"
                    name="roles"
                    value="drummer"
                    onChange={changeData}
                    checked={formData.roles.includes("drummer")}
                  />
                  Drummer
                </label>
              </div>
              <div className="fieldCheckbox__checker">
                <label htmlFor="keyboard" className="form-control">
                  <input
                    type="checkbox"
                    id="keyboard"
                    name="roles"
                    value="keyboard"
                    onChange={changeData}
                    checked={formData.roles.includes("keyboard")}
                  />
                  Keyboard
                </label>
              </div>
              <div className="fieldCheckbox__checker">
                <label htmlFor="other" className="form-control">
                  <input
                    type="checkbox"
                    id="other"
                    name="roles"
                    value="other"
                    onChange={changeData}
                    checked={formData.roles.includes("other")}
                  />
                  Other
                </label>
              </div>
            </fieldset>
          </div>
          {!id && (
            <button
              disabled={buttonDisabled}
              type="submit"
              className="form-button"
            >
              CREATE
            </button>
          )}
          {id && (
            <button
              disabled={buttonDisabled}
              type="submit"
              className="form-button"
            >
              EDIT
            </button>
          )}
        </form>
      </FormStyles>
    </>
  );
};

export default FormProject;
