import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { PaginatorStyles } from "./PaginatorStyles";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Paginator() {
  const { page, pagesize, nextpage, previous, total, results } = useAppSelector(
    (state) => state.projects
  );

  const actualPage = page ? page + 1 : 1;
  const actualPageSize = pagesize ? pagesize : 6;
  const actualtotal = total ? total : results.length;

  return (
    <PaginatorStyles
      className="
    pager-container"
    >
      <div className="pager">
        <button className="pager__button">
          <GrPrevious className="icon" />
        </button>

        <span>
          {actualPage} TO {actualPage * actualPageSize} / TOTAL {actualtotal}
        </span>

        <button className="pager__button">
          <GrNext className="icon" />
        </button>
        {/* // nameClass={"icon-container"}
        // text={<BsCaretRightFill title="next-page" />}
        // action={() => {
        //   loadCharacters(state.info.next);
        // }} */}
      </div>
    </PaginatorStyles>
  );
}
