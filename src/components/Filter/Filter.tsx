import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { loadProjectsThunkbyQuery } from "../../redux/thunks/projectsThunks/projectsThunks";
import { FilterStyles } from "./FilterStyles";

const Filter = (): JSX.Element => {
  const [isGenrerExpanded, setIsGenrerExpanded] = useState<boolean>(false);
  const genrerToggle = () => {
    setIsGenrerExpanded(!isGenrerExpanded);
  };
  const url = process.env.REACT_APP_API_URL as string;
  const dispatch = useAppDispatch();

  const filterbyGenre = (query: string) => {
    dispatch(loadProjectsThunkbyQuery(query));
  };

  return (
    <FilterStyles>
      <div className="filter">
        <div className="filter-category">
          <div className="filter-category__heading" onClick={genrerToggle}>
            <span className="title">GENRES</span>
          </div>
          <div
            className={
              isGenrerExpanded ? `panel-collapse` : `panel-collapse panel-close`
            }
          >
            <ul className="filter-category__options">
              <li
                className="filter-category__options-item"
                onClick={() => filterbyGenre(url + "projects?&genre=rock")}
              >
                Rock
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterbyGenre(url + "projects?&genre=blues")}
              >
                Blues
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterbyGenre(url + "projects?&genre=pop")}
              >
                Pop
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterbyGenre(url + "projects?&genre=folk")}
              >
                Folk
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FilterStyles>
  );
};

export default Filter;
