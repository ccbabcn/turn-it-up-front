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

    &__cover {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__name {
        position: absolute;
        width: 80%;
        top: 20px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 30px;
        color: #fdfffc;
        text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
      }

      &__description {
        display: none;
        &--details {
          display: inline-block;
          width: 100%;
          padding: 30px;
          font-size: 20px;
          font-weight: 400;
        }
      }
    }

    &__details {
      display: flex;
      flex-direction: column;
      gap: 20px;
      &__needs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        &--hidden {
          display: none;
        }
      }
      .genres {
        font-size: 20px;
        font-weight: 500;
      }
    }

    &__roles {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 10px;

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

      &--details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 auto;
        gap: 20px;

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

          &--details {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
          }
        }
      }
    }

    &__author {
      font-size: 18px;
      color: #51246a;
    }

    &__actions {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;

      button {
        font-size: 1.1rem;
        color: #fdfffc;
        width: 30%;
        min-width: 80px;

        height: 60px;
        border-radius: 30px;
        padding: 0;
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
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .project {
      max-width: 900px;
      box-shadow: none;
      border-radius: 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      box-shadow: inset 0 -1em 1rem rgb(0 0 0 / 10%), 0 0 rgb(255 255 255),
        0.25em 0.25em 1em rgb(0 0 0 / 30%);

      &__cover {
        width: 50%;
        min-width: 50%;
        &__image {
          min-width: 100%;
        }
        &__description--details {
          color: #fdfffc;
          background: #082133;
        }
      }
      &__details {
        height: 360px;
        width: 600px;
        align-items: center;
        justify-content: center;
      }

      .project__details__needs--hiden {
        visibility: none;
      }
    }

    button {
      font-size: 1.1rem;
      color: #fdfffc;
      width: 30%;
      max-width: 120px;

      height: 50px;
      border-radius: 25px;
      padding: 0;
    }
  }
`;
