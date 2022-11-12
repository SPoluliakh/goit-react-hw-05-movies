import ReactPaginate from 'react-paginate';
import './Pagination.css';
import PropTypes from 'prop-types';

function PaginatedItems({ setPageNumber, totalPages, currentPage, parametr }) {
  const handlePageClick = event => {
    parametr
      ? setPageNumber({
          query: parametr,
          page: event.selected + 1,
        })
      : setPageNumber({ page: event.selected + 1 });
  };

  return (
    <>
      <ReactPaginate
        pageCount={totalPages}
        forcePage={currentPage}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={2}
        marginPagesDisplayed={4}
        containerClassName="pagination"
        activeClassName="active"
        breakClassName="item"
        breakLinkClassName="link"
        pageClassName="item"
        pageLinkClassName="link"
        previousClassName="item"
        previousLinkClassName="link"
        nextClassName="item"
        nextLinkClassName="link"
      />
    </>
  );
}

export default PaginatedItems;

PaginatedItems.propTypes = {
  setPageNumber: PropTypes.func,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  parametr: PropTypes.string,
};
