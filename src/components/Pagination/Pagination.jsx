import ReactPaginate from 'react-paginate';
import './Pagination.css';
import PropTypes from 'prop-types';
import { Box } from 'Utils/Box';

function PaginatedItems({
  setPageNumber,
  totalPages,
  currentPage,
  parametr,
  period,
  genre,
}) {
  const handlePageClick = event => {
    parametr
      ? setPageNumber({
          query: parametr,
          page: event.selected + 1,
        })
      : setPageNumber({
          genre: genre,
          period: period,
          page: event.selected + 1,
        });
    windowScroll();
  };

  const windowScroll = () => {
    window.scrollBy({
      top: -10000,
      behavior: 'smooth',
    });
  };

  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <ReactPaginate
        pageCount={totalPages}
        forcePage={currentPage}
        onPageChange={handlePageClick}
        breakLabel="..."
        nextLabel="next >"
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
    </Box>
  );
}

export default PaginatedItems;

PaginatedItems.propTypes = {
  setPageNumber: PropTypes.func,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  parametr: PropTypes.string,
  period: PropTypes.string,
  genre: PropTypes.string,
};
