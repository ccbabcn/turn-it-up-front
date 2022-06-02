import styled from "styled-components";

export const FormStyles = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    align-items: center;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 80px 30px;
    width: 70%;
    min-width: 300px;
    display: flex;
    flex-direction: column;

    .formField {
      display: flex;
      flex-direction: column;
    }

    label {
      align-items: left;
      font-size: 26px;
    }

    input {
      font-size: 22px;
      height: 60px;
      color: #786871;
      border: 1px solid #786871;
      border-radius: 20px;
      padding: 0 10px;
      margin-bottom: 20px;
    }

    button {
      :enabled {
        color: #fdfffc;
        background: #2a7f62;
        border: none;
      }
      margin-top: 20px;
      height: 60px;
      width: 250px;
      border-radius: 20px;
      font-size: 26px;
    }
  }
`;
