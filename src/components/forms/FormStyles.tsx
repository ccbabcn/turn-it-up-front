import styled from "styled-components";

export const FormStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    color: #000;
    background: #fdfffc;
    align-items: center;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    border: solid 1px #aea9ac;
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
      border: 1px solid;
      border-color: #786871;
      border-radius: 20px;
      padding: 0 10px;
      margin-bottom: 20px;
      transition: border-color 0.2s ease;
    }

    button {
      :enabled {
        background: #2a7f62;
        border: none;
        :active {
          background: #194d3c;
        }
      }
      :disabled {
        background: #74d2b3;
      }
      color: #fdfffc;
      margin-top: 20px;
      height: 60px;
      width: 250px;
      border-radius: 20px;
      font-size: 26px;
      border: none;
      transition: background-color 0.2s ease;
    }
    .form-options {
      font-weight: 500;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      font-size: 18px;
      height: 80px;
      padding-top: 10px;
      margin-top: 50px;
      border-top: solid 1px #aea9ac;
      color: #261132;
      a {
        color: #51246a;
      }
    }
  }
`;
