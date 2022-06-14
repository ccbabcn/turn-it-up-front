import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  color: #fdfffc;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 350px;
  background: #261132;
  padding: 50px;
  font-size: 18px;
  .title {
    text-transform: uppercase;
    font-size: 20px;
  }
  span {
    font-size: 16px;
    color: #bdbddb;
  }

  ul {
    padding: 0;
  }
  li {
    color: #bdbddb;

    list-style: none;
  }

  .footer__row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (min-width: 600px) {
    .footer__row {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 50px;
    }
  }
`;
