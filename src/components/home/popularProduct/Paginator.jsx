/* import { useState } from "react";

import style from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChange,sd
  portionSize = 5,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      <div className={style.UserCountBody}>
        {portionNumber > 1 && (
          <button
            className={style.btn}
            onClick={() => setPortionNumber(portionNumber - 1)}
          >
            Prev
          </button>
        )}
        {pages
          .filter(
            (m) => m >= leftPortionPageNumber && m <= rightPortionPageNumber
          )
          .map((m) => (
            <span
              key={m}
              className={""}
              onClick={() => {
                onPageChange(m);
              }}
            >
              {m}
            </span>
          ))}
        {portionCount > portionNumber && (
          <button
            className={style.btn}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default Paginator;
 */