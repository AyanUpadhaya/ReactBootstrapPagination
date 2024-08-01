import returnPaginationRange from "../../utils/appUtils";
import PropTypes from "prop-types";

export default function Pagination(props) {
  let array = returnPaginationRange(
    props.totalPage,
    props.page,
    props.limit,
    props.siblings
  );
  return (
    <ul className="pagination pagination-md justify-content-end">
      <li onClick={() => props.onChangePage("&laquo;")} className="page-item cursor-pointer">
        <span className="page-link">
          <span aria-hidden="true">&laquo;</span>
        </span>
      </li>
      <li onClick={() => props.onChangePage("&lsaquo;")} className="page-item cursor-pointer">
        <span className="page-link">
          <span aria-hidden="true">&lsaquo;</span>
        </span>
      </li>
      {array.map((value, idx) => (
        <li
          onClick={() => props.onChangePage(value)}
          key={idx}
          className={`page-item cursor-pointer ${value == props.page ? "active" : ""}`}
        >
          <span className="page-link">{value}</span>
        </li>
      ))}

      <li onClick={() => props.onChangePage("&rsaquo;")} className="page-item cursor-pointer">
        <span className="page-link">
          <span aria-hidden="true">&rsaquo;</span>
        </span>
      </li>
      <li onClick={() => props.onChangePage("&raquo;")} className="page-item cursor-pointer">
        <span className="page-link">
          <span aria-hidden="true">&raquo;</span>
        </span>
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  totalPage: PropTypes.number,
  page: PropTypes.number,
  limit: PropTypes.number,
  siblings: PropTypes.number,
  onChangePage: PropTypes.func,
};
