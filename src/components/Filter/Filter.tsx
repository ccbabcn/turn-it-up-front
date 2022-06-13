import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { loadProjectsThunkbyQuery } from "../../redux/thunks/projectsThunks/projectsThunks";
import { FilterStyles } from "./FilterStyles";

interface Props {
  queryPrefix: string;
}
const Filter = ({ queryPrefix }: Props): JSX.Element => {
  console.log(queryPrefix);
  const [isGenrerExpanded, setIsGenrerExpanded] = useState<boolean>(false);
  const genrerToggle = () => {
    setIsGenrerExpanded(!isGenrerExpanded);
  };
  const url = (process.env.REACT_APP_API_URL as string) + queryPrefix;
  const dispatch = useAppDispatch();

  const filterbyGenre = (query: string) => {
    genrerToggle();
    dispatch(loadProjectsThunkbyQuery(query));
  };

  return (
    <FilterStyles>
      <div className="filter">
        <div className="filter-category">
          <div className="filter-category__heading-container">
            <div
              className={
                isGenrerExpanded
                  ? `filter-category__heading--selected`
                  : `filter-category__heading`
              }
              onClick={genrerToggle}
            >
              <span className="title">GENRES</span>
            </div>
            <div className="filter-category__heading" onClick={genrerToggle}>
              <span className="title">ROLES</span>
            </div>
          </div>
          <div
            className={
              isGenrerExpanded ? `panel-collapse` : `panel-collapse panel-close`
            }
          >
            <ul className="filter-category__options">
              <li
                className="filter-category__options-item"
                onClick={() => filterbyGenre(url + "genre=rock")}
              >
                Rock
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterbyGenre(url + "genre=blues")}
              >
                Blues
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterbyGenre(url + "genre=pop")}
              >
                Pop
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterbyGenre(url + "genre=folk")}
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
