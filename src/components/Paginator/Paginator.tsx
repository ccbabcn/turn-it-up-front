import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PaginatorStyles } from "./PaginatorStyles";
import { GrPrevious, GrNext } from "react-icons/gr";
import { loadProjectsThunkbyQuery } from "../../redux/thunks/projectsThunks/projectsThunks";

export default function Paginator() {
  const { page, pagesize, nextpage, previous, total, results } = useAppSelector(
    (state) => state.projects
  );

  const actualPage = page ? page + 1 : 1;
  const actualPageSize = pagesize ? pagesize : 6;
  const actualtotal = total ? total : results.length;

  const actualNextpage = nextpage ? nextpage : "";
  const actualPreviousPage = previous ? previous : "";

  const dispatch = useAppDispatch();

  const loadNextPage = () => {
    if (nextpage) {
      dispatch(loadProjectsThunkbyQuery(actualNextpage));
    }
  };

  const loadPreviousPage = () => {
    if (previous) {
      dispatch(loadProjectsThunkbyQuery(actualPreviousPage));
    }
  };

  return (
    <PaginatorStyles
      className="
    pager-container"
    >
      <div className="pager">
        <button
          data-testid="TEST"
          title="previous"
          disabled={previous ? false : true}
          className="pager__button"
          onClick={loadPreviousPage}
        >
          <GrPrevious className="icon" />
        </button>

        <span>
          PAGE {actualPage} OF {Math.ceil(actualtotal / actualPageSize)} <br />{" "}
          TOTAL {actualtotal} PROJECTS
        </span>

        <button
          title="next"
          disabled={nextpage ? false : true}
          className="pager__button"
          onClick={loadNextPage}
        >
          <GrNext className="icon" />
        </button>
      </div>
    </PaginatorStyles>
  );
}
