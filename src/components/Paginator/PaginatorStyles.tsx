import styled from "styled-components";

export const PaginatorStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdfffc;

  .pager {
    max-width: 450px;
    min-width: 300px;
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    &__button {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: #fdfffc;
      background: #261132;
      border: none;
      .icon {
        polyline {
          stroke: #fdfffc;
        }
        width: 30px;
        height: 30px;
      }
      :hover {
        background: #51246a;
      }
      :active {
        background: #8a89c0;
      }
    }

    span {
      padding: 0 10px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: #51246a;
    }
  }
`;
