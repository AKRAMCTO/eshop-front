import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './../../hooks/usePagination';
// import './pagination.scss';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <nav className={classnames('custome-pagination', { [className]: className })}>
        <ul className={classnames('pagination justify-content-center', { [className]: className })}>
            <li
                className={classnames('page-item', {
                disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <span className="page-link"><i className="fa-solid fa-angles-left"></i></span>
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className="page-item dots">&#8230;</li>;
                }

                return (
                    <li
                        className={classnames('page-item', {selected: pageNumber === currentPage})}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        <span className={`page-link`}>{pageNumber}</span>
                    </li>
                );
            })}
            <li
                className={classnames('page-item', { disabled: currentPage === lastPage })}
                onClick={onNext}
            >
                <span className="page-link"><span className="fa-solid fa-angles-right"></span></span>
            </li>
        </ul>
    </nav>
  );
};

export default Pagination;
