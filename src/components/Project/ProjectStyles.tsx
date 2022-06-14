import styled from "styled-components";

export const ProjectStyles = styled.li`
  width: 100%;
  padding: 0 20px;
  .project {
    max-width: 450px;
    min-width: 260px;
    background: #fdfffc;
    box-shadow: inset 0 -1em 1rem rgb(0 0 0 / 10%), 0 0 rgb(255 255 255),
      0.25em 0.25em 1em rgb(0 0 0 / 30%);
    border-radius: 20px;

    &__name {
      h3 {
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
    &__author {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      color: #51246a;
      font-weight: 500;
    }
    &__description {
      display: flex;
      flex-direction: column;
      font-size: 1.25em;
      text-align: center;
      text-justify: distribute;
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

      &--details-version {
        width: 100%;
        padding: 0 40px;
        font-size: 1.1em;
        gap: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 20px;
        color: #082133;

        .icon-container {
          color: #fdfffc;
          font-size: 25px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          width: 60px;
          background-color: #1b435f;
          border-radius: 50%;

          .icon {
            width: 50px;
            height: 50px;
            margin: 10px;
          }
        }
      }

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

  @media (min-width: 600px) {
    width: 100%;
    padding: 0;

    .project {
      min-width: 100%;
      box-shadow: none;
      border-radius: 0px;
      display: flex;
      flex-direction: row;
      align-items: center;

      &__image {
        max-width: 40%;
        min-width: 40%;
        height: 360px;
      }
      &__name {
        padding: 0 50px;
        h3 {
          width: 100%;
          transform: translatey(0px);

          position: inherit;
          font-size: 30px;
          font-weight: 500;
          color: #082133;
          text-shadow: none;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .project__details-container {
        width: 60%;
        height: 360px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .project__genres {
      font-size: 15px;
      font-weight: 600;
    }
  }
`;
