import { useState } from "react";
import { FilterStyles } from "./FilterStyles";

const Filter = (): JSX.Element => {
  const [isGenrerExpanded, setIsGenrerExpanded] = useState<boolean>(false);
  const genrerToggle = () => {
    setIsGenrerExpanded(!isGenrerExpanded);
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
              <li className="filter-category__options-item">Rock</li>
              <li className="filter-category__options-item">Blues</li>
              <li className="filter-category__options-item">Pop</li>
              <li className="filter-category__options-item">Folk</li>
            </ul>
          </div>
        </div>
      </div>
    </FilterStyles>
  );
};

export default Filter;
