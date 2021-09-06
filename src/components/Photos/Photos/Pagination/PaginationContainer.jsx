import { connect } from 'react-redux';
import React from 'react';
import Pagination from './Pagination';
import {PaginationAC,SetPostsAC,SetIsPaginateAC} from '../../../../redux/reducers/blogReducer';
import * as axios from 'axios';
class PaginationClass extends React.Component{
	onPaginateNext=()=>{
		if(this.props.isPaginate){//Условие пагинации
		axios.get(`http://localhost:8000/posts?_page=${this.props.currentPage+1}&_limit=${this.props.pageSize}`)
		.then(response=>{//Запрос на сервер, получающий следующие записи
			if(response.data.length>0){//Если число записей 1 и больше
				this.props.pagination('next');
				this.props.setPosts(response.data);
			}
			else{
				this.props.setIsPaginate(false);
			}
		})
		}
	}
	onPaginatePrevious=()=>{
		this.props.isPaginate===false && this.props.setIsPaginate(true)
		this.props.pagination('previous');
		if(this.props.currentPage-1>0){//Если есть предыдущие страницы с записями
			axios.get(`http://localhost:8000/posts?_page=${this.props.currentPage-1}&_limit=${this.props.pageSize}`)
			.then(response=>{//Запрос на сервер, получающий предыдущие записи
				this.props.setPosts(response.data);
			})
		}
	}
	render(){
		return (<Pagination onPaginateNext={this.onPaginateNext} onPaginatePrevious={this.onPaginatePrevious}></Pagination>);
	}
}

let mapStateToProps=(state)=>{
	return {
		currentPage:state.blogPage.currentPage,
		pageSize:state.blogPage.pageSize,
		isPaginate:state.blogPage.isPaginate
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
		setPosts:(posts)=>{dispatch(SetPostsAC(posts))},
		pagination:(paginationType)=>{dispatch(PaginationAC(paginationType))},
		setIsPaginate:(isPaginate)=>{dispatch(SetIsPaginateAC(isPaginate))}
	}
}
const PaginationContainer = connect(mapStateToProps,mapDispatchToProps)(PaginationClass);
export default PaginationContainer;