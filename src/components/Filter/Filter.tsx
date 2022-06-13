import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { loadProjectsThunkbyQuery } from "../../redux/thunks/projectsThunks/projectsThunks";
import { FilterStyles } from "./FilterStyles";

interface Props {
  queryPrefix: string;
}
const Filter = ({ queryPrefix }: Props): JSX.Element => {
  const [isGenrerExpanded, setIsGenrerExpanded] = useState<boolean>(false);
  const [isRoleExpanded, setIsRoleExpanded] = useState<boolean>(false);
  const url = (process.env.REACT_APP_API_URL as string) + queryPrefix;

  const genrerToggle = () => {
    if (isRoleExpanded) {
      roleToggle();
    }
    setIsGenrerExpanded(!isGenrerExpanded);
  };

  const roleToggle = () => {
    if (isGenrerExpanded) {
      genrerToggle();
    }
    setIsRoleExpanded(!isRoleExpanded);
  };
  const dispatch = useAppDispatch();

  const filterHandler = (type: string, query: string) => {
    let genreFilterQuery: string = "";
    if (type === "genre") {
      genreFilterQuery = `genre=${query}`;
    }
    if (type === "role") {
      genreFilterQuery = `role=${query}`;
    }
    genrerToggle();
    dispatch(loadProjectsThunkbyQuery(url + genreFilterQuery));
  };
  const resetFilter = () => {
    if (isGenrerExpanded) {
      genrerToggle();
    }
    if (isRoleExpanded) {
      roleToggle();
    }
    dispatch(loadProjectsThunkbyQuery(url));
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
            <div
              className={
                isRoleExpanded
                  ? `filter-category__heading--selected`
                  : `filter-category__heading`
              }
              onClick={roleToggle}
            >
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
                onClick={() => filterHandler("genre", "rock")}
              >
                Rock
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterHandler("genre", "blues")}
              >
                Blues
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterHandler("genre", "pop")}
              >
                Pop
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterHandler("genre", "folk")}
              >
                Folk
              </li>
              <li
                className="filter-category__options-item-default"
                onClick={resetFilter}
              >
                All
              </li>
            </ul>
          </div>
          <div
            className={
              isRoleExpanded ? `panel-collapse` : `panel-collapse panel-close`
            }
          >
            <ul className="filter-category__options">
              <li
                className="filter-category__options-item"
                onClick={() => filterHandler("role", "guitarrist")}
              >
                Guitarrist
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterHandler("role", "singer")}
              >
                Singer
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterHandler("role", "bassplayer")}
              >
                Bassplayer
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterHandler("role", "drummer")}
              >
                Drummer
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterHandler("role", "keyboard")}
              >
                Keyboard
              </li>
              <li
                className="filter-category__options-item"
                onClick={() => filterHandler("role", "other")}
              >
                Other
              </li>
              <li
                className="filter-category__options-item-default"
                onClick={resetFilter}
              >
                All
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FilterStyles>
  );
};

export default Filter;
