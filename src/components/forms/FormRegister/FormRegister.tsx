import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { registerThunk } from "../../../redux/thunks/userThunks/userThunks";
import { FormStyles } from "../FormStyles";
import { FormRegisterData } from "../FormTypes";

const FormRegister = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const blankFields: FormRegisterData = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormRegisterData>(blankFields);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (
      formData.username !== "" &&
      formData.password !== "" &&
      formData.name !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitRegister = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setFormData(blankFields);
    navigate("/login");
  };

  return (
    <FormStyles>
      <form autoComplete="off" noValidate onSubmit={submitRegister}>
        <div className="formField">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={changeData}
            placeholder="Name"
          />
        </div>
        <div className="formField">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={changeData}
            placeholder="Username"
          />
        </div>
        <div className="formField">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={changeData}
            placeholder="Password"
          />
        </div>
        <button disabled={buttonDisabled} type="submit" className="form-button">
          REGISTER
        </button>
        <div className="form-options">
          Already have an account? <NavLink to="/login">Login now</NavLink>
        </div>
      </form>
    </FormStyles>
  );
};

export default FormRegister;
