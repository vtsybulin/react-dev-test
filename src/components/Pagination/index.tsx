import {ReactElement} from "react";
import {Pagination as PaginationBase} from 'react-bootstrap';
import {PER_PAGE} from "^configs/common.ts";

interface IPaginationProps {
  current: number;
  total?: number;
  onChange: (page: number) => void;
}

const Pagination = ({ total = 0, current, onChange }: IPaginationProps): ReactElement | null => {
  const pagesCount = Math.ceil(total / PER_PAGE);
  const pages = Array.from(Array(pagesCount), (_, index: number) => index + 1);

  if (pages.length <= 1) {
    return null;
  }

  return (
    <PaginationBase>
      {
        pages.map((page: number): ReactElement => (
          <PaginationBase.Item
            key={page}
            active={page === current}
            onClick={(): void => onChange(page)}
          >
            {page}
          </PaginationBase.Item>
        ))
      }
    </PaginationBase>
  );
}

export default Pagination;
