import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { loginThunk } from "../../../redux/thunks/userThunks/userThunks";
import { FormStyles } from "../FormStyles";
import { FormLoginData } from "../FormTypes";

const FormLogin = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logged = useAppSelector((state) => state.user.logged);

  const blankFields: FormLoginData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormLoginData>(blankFields);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  useEffect(() => {
    if (logged) {
      navigate("/projects");
    }
  }, [logged, navigate]);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
    setFormData(blankFields);
  };

  return (
    <>
      <FormStyles>
        <form autoComplete="off" noValidate onSubmit={submitLogin}>
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
          <button
            disabled={buttonDisabled}
            type="submit"
            className="form-button"
          >
            LOGIN
          </button>
          <div className="form-options">
            Don’t have an account?{" "}
            <NavLink to="/register">Register now</NavLink>
          </div>
        </form>
      </FormStyles>
    </>
  );
};

export default FormLogin;
