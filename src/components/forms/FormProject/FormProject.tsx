import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { createProjectThunk } from "../../../redux/thunks/projectsThunks/projectsThunks";
import { IProject } from "../../../types/ProjectsTypes";
import { FormStyles } from "../FormStyles";

const FormProject = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector((state) => state.user.id);

  const blankFields: IProject = {
    name: "",
    description: "",
    image: "",
    genres: [],
    roles: [],
    id: "",
    owner: userId,
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
        formData["genres"].includes(event.target.value)
          ? (formData["genres"] = formData["genres"].filter(
              (genre) => genre !== event.target.value
            ))
          : setFormData({
              ...formData,
              [event.target.name]: [...formData.genres, event.target.value],
            });
      }
      if (actualField === "roles") {
        formData["roles"].includes(event.target.value)
          ? (formData["roles"] = formData["roles"].filter(
              (genre) => genre !== event.target.value
            ))
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

  const submitProjectForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const newProject = new FormData();
    newProject.append("newProject", JSON.stringify(formData));
    newProject.append("image", formData.image);

    dispatch(createProjectThunk(formData));
    setFormData(blankFields);
  };

  return (
    <>
      <FormStyles>
        <form autoComplete="off" noValidate onSubmit={submitProjectForm}>
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
            <label htmlFor="image">Choose image</label>
            <input id="image" type="file" onChange={uploadImage} />
          </div>
          <div className="formField checkbox">
            <fieldset>
              <legend>Select genre</legend>
              <div>
                <input
                  type="checkbox"
                  id="rock"
                  name="genres"
                  value="rock"
                  onChange={changeData}
                />
                <label htmlFor="rock">Rock</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="blues"
                  name="genres"
                  value="blues"
                  onChange={changeData}
                />
                <label htmlFor="blues">Blues</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="pop"
                  name="genres"
                  value="pop"
                  onChange={changeData}
                />
                <label htmlFor="pop">Pop</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="folk"
                  name="genres"
                  value="folk"
                  onChange={changeData}
                />
                <label htmlFor="folk">Folk</label>
              </div>
            </fieldset>
          </div>
          <div className="formField checkbox">
            <fieldset>
              <legend>Select roles needed</legend>
              <div>
                <input
                  type="checkbox"
                  id="guitarrist"
                  name="roles"
                  value="guitarrist"
                  onChange={changeData}
                />
                <label htmlFor="guitarrist">Guitarrist</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="singer"
                  name="roles"
                  value="singer"
                  onChange={changeData}
                />
                <label htmlFor="singer">Singer</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="bassplayer"
                  name="roles"
                  value="bassplayer"
                  onChange={changeData}
                />
                <label htmlFor="bassplayer">Bassplayer</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="drummer"
                  name="roles"
                  value="drummer"
                  onChange={changeData}
                />
                <label htmlFor="drummer">Drummer</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="keyboard"
                  name="roles"
                  value="keyboard"
                  onChange={changeData}
                />
                <label htmlFor="keyboard">Keyboard</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="other"
                  name="roles"
                  value="other"
                  onChange={changeData}
                />
                <label htmlFor="other">Other</label>
              </div>
            </fieldset>
          </div>
          <button
            disabled={buttonDisabled}
            type="submit"
            className="form-button"
          >
            CREATE
          </button>
        </form>
      </FormStyles>
    </>
  );
};

export default FormProject;
