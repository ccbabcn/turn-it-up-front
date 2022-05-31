import axios from "axios";
import React, { useEffect, useState } from "react";

const FormRegister = (): JSX.Element => {
  interface FormData {
    name: string;
    username: string;
    password: string;
  }

  const blankFields: FormData = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(blankFields);
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
    await axios.post<FormData>(
      `${process.env.REACT_APP_API_URL}user/register`,
      formData
    );
    setFormData(blankFields);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={submitRegister}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={changeData}
        placeholder="Name"
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={formData.username}
        onChange={changeData}
        placeholder="Username"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={changeData}
        placeholder="Password"
      />
      <button disabled={buttonDisabled} type="submit" className="form-button">
        Register
      </button>
    </form>
  );
};

export default FormRegister;
