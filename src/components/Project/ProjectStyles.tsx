import styled from "styled-components";

export const ProjectStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  background: #51246a;

  .project {
    background: #fdfffc;
    box-shadow: inset 0 -1em 1rem rgb(0 0 0 / 10%), 0 0 rgb(255 255 255),
      0.25em 0.25em 1em rgb(0 0 0 / 30%);
    border-radius: 20px;
    &__name {
      transform: translatey(-330px);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fdfffc;
      box-shadow: inset 0 2rem 0 rgb(0 0 0 / 70%), 0 0px rgb(255 255 255),
        0.25em 0.25em 1em rgb(0 0 0 / 50%);
    }
    &__details {
      text-align: center;
      span {
        color: #082133;
      }
    }
    &__description {
      display: flex;
      flex-direction: column;
    }
    &__genres {
      font-size: 20px;
      font-weight: 600;
    }

    &__actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;

      button {
        font-size: 1rem;
        color: #fdfffc;
        width: 100px;
        height: 50px;
        border-radius: 30px;
      }

      &--info {
        background: #1b435f;
        :hover {
          background: #296186;
        }
        :active {
          background: #082133;
        }
      }
      &--join {
        background: #2a7f62;
        :hover {
          background: #37a983;
        }
        :active {
          background: #194d3c;
        }
      }
      &--delete {
        background: #ed254e;
        :hover {
          background: #f56381;
        }
        :active {
          background: #71091e;
        }
      }
    }
  }
`;
