import styled from "styled-components";

export const ErrorPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  color: #fdfffc;

  .errorImage {
    z-index: -10;
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
  .message-container {
    position: absolute;
    h2 {
      font-size: 120px;
      text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
      line-height: 0;
    }
    font-size: 25px;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
    .redirect {
      font-size: 16px;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      background: #261132;
      justify-content: center;
      padding: 20px;
      border-radius: 20px;
      margin-top: 30px;
      color: #fdfffc;
      text-decoration: none;
      a {
      }
      background: #261132;
    }
  }
`;
