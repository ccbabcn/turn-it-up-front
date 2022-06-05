import styled from "styled-components";

export const ProjectStyles = styled.li`
  .project {
    background: #fdfffc;
    box-shadow: inset 0 -1em 1rem rgb(0 0 0 / 10%), 0 0 rgb(255 255 255),
      0.25em 0.25em 1em rgb(0 0 0 / 30%);
    border-radius: 20px;

    &__name {
      h3 {
        font-size: 30px;
        transform: translatey(-330px);
        color: #fdfffc;
        text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
        position: absolute;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
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

    &__genre-icons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: #fdfffc;
      padding-bottom: 16px;

      .icon-container {
        font-size: 25px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        background-color: #1b435f;
        border-radius: 50%;

        .icon {
          width: 80%;
          height: 80%;
        }
      }
    }

    &__actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;

      button {
        font-size: 1.1rem;
        color: #fdfffc;
        width: 30%;
        height: 60px;
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
        background: #840b23;
        :hover {
          background: #f56381;
        }
        :active {
          background: #4b0614;
        }
      }
    }
  }
`;
