import styled from "styled-components";

export const FilterStyles = styled.div`
  position: sticky;
  top: 0px;
  z-index: 123;

  width: 100%;
  height: 56px;
  background: #8a89c0;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 0;
  user-select: none;
  cursor: pointer;
  .filter {
    width: 100%;
  }
  .panel-collapse {
    position: absolute;
    transform: translateY(-20px);
    overflow: hidden;
    transition: max-height 0.5s ease;
    width: 100%;
  }
  .panel-close {
    max-height: 0;
  }

  .filter-category {
    width: 100%;
    &__heading {
      height: 50px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      .title {
        display: block;
        width: 100%;
      }
    }

    &__options {
      width: 100%;
      padding-left: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background: #261132;
    }
    &__options-item {
      height: 56px;
      width: 100%;
      border-bottom: 1px solid #fdfffc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
