import React from 'react';
import style from './Pagination.module.css';
function Pagination(props) {
	return (<div className={style.pagination}>
		<button className={style.paginationButton} onClick={props.onPaginatePrevious}>Показать предыдущие</button>
		<button className={style.paginationButton} onClick={props.onPaginateNext}>Показать следующие</button>
	</div>);
}
export default Pagination;