import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormStyles } from "../FormStyles";
import { FormRegisterData } from "../FormTypes";

const FormRegister = (): JSX.Element => {
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
    await axios.post<FormRegisterData>(
      `${process.env.REACT_APP_API_URL}user/register`,
      formData
    );
    setFormData(blankFields);
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
      </form>
    </FormStyles>
  );
};

export default FormRegister;
