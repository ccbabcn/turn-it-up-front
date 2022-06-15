import styled from "styled-components";

export const FormStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 50px;

  .imagefield {
    display: flex;
    input[type="file"]::-webkit-file-upload-button {
      visibility: hidden;
      text-align: center;
      position: absolute;
      margin: 20px;
    }

    width: 100%;
    &__name {
      position: relative;
      overflow: hidden;
      line-height: 30px;
      padding: 5px;
      box-sizing: border-box;
      font-size: 15px;
      vertical-align: middle;
      width: 300px;
      border: 2px solid #dbdbdb;
      border-radius: 0;
      height: calc(2em + 0.75rem + 2px);
    }

    &__input {
      background: #3479ce;

      width: 100%;
      padding: 15px 20px;
      background-color: #51246a;
      -webkit-transition: all 0.6s;
      transition: all 0.6s;
      color: #fff;
      vertical-align: middle;

      &:hover {
        background: #2a64ad;
        box-shadow: 0 0 5px #33006e;
      }
    }
  }

  textarea#description {
    font-size: 1.25rem;
    resize: vertical;
    width: 100%;
    height: 120px;
    border-radius: 20px;
    border: 1px solid #aea9ac;
    padding: 5px;
    margin-bottom: 20px;
  }

  .imagefield__label {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  form {
    color: #000;
    background: #fdfffc;
    align-items: center;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    border: solid 1px #aea9ac;
    padding: 30px 20px;
    width: 70%;
    max-width: 600px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    .formField {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .fieldCheckbox {
      width: 90%;
      display: flex;
      flex-direction: column;

      &__fieldSet {
        border: solid 1px #aea9ac;

        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 20px 0;
        border-radius: 20px;
        padding: 20px;
      }

      &__checker {
        .form-control {
          font-size: 1.25rem;
          line-height: 1.1;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding: 10px 10px;
        }

        input[type="checkbox"] {
          -webkit-appearance: none;
          appearance: none;
          background-color: var(--form-background);
          margin: 0;

          font: inherit;
          color: currentColor;
          width: 1.75em;
          height: 1.75em;
          border: 0.15em solid currentColor;
          border-radius: 0.35em;

          display: grid;
          place-content: center;
        }

        input[type="checkbox"]::before {
          content: "";
          width: 0.65em;
          height: 0.65em;
          clip-path: polygon(
            14% 44%,
            0 65%,
            50% 100%,
            100% 16%,
            80% 0%,
            43% 62%
          );
          transform: scale(0);
          transform-origin: bottom left;
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em var(--form-control-color);
          /* Windows High Contrast Mode */
          background-color: CanvasText;
        }

        input[type="checkbox"]:checked::before {
          transform: scale(1);
          --form-control-color: #51246a;
        }
      }
    }

    label {
      align-items: left;
      font-size: 1.5em;
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
      width: 290px;
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
