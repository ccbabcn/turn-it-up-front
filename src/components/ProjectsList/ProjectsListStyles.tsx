import styled from "styled-components";

export const ProjectsListStyles = styled.div`
  color: #fdfffc;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    gap: 50px;
    margin: 50px 0;
    list-style: none;
    padding-left: 0;
  }

  @media (min-width: 600px) {
    width: 100%;
    .projects-container {
      width: 100%;
    }
  }
`;
