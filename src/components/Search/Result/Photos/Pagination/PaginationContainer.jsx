import { connect } from 'react-redux';
import React from 'react';
import Pagination from './Pagination';
import {PaginationAC,SetSearchedPostsAC,SetIsPaginateAC} from '../../../../../redux/reducers/searchReducer';
import * as axios from 'axios';
class PaginationClass extends React.Component{
	onPaginateNext=()=>{
		if(this.props.isPaginate){//Условие пагинации
		axios.get(`http://localhost:8000/posts?q=${this.props.searchedText}
		&_page=${this.props.currentPage+1}
		&_limit=${this.props.pageSize}`)//Запрос на сервер, получающий следующие записи
		.then(response=>{
			if(response.data.length>0){//Если число записей 1 и больше
				this.props.pagination('next');
				this.props.setSearchedPosts(response.data);
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
			axios.get(`http://localhost:8000/posts?q=${this.props.searchedText}
			&_page=${this.props.currentPage-1}
			&_limit=${this.props.pageSize}`)
			.then(response=>{//Запрос на сервер, получающий предыдущие записи
				this.props.setSearchedPosts(response.data);
			})
		}
	}
	render(){
		return (<Pagination onPaginateNext={this.onPaginateNext} onPaginatePrevious={this.onPaginatePrevious}></Pagination>);
	}
}

let mapStateToProps=(state)=>{
	return {
		currentPage:state.searchPage.currentPage,
		pageSize:state.searchPage.pageSize,
		isPaginate:state.searchPage.isPaginate,
		searchedText:state.searchPage.searchedText
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {

		setSearchedPosts:(searchedPosts)=>{dispatch(SetSearchedPostsAC(searchedPosts))},
		pagination:(paginationType)=>{dispatch(PaginationAC(paginationType))},
		setIsPaginate:(isPaginate)=>{dispatch(SetIsPaginateAC(isPaginate))}
	}
}
const PaginationContainer = connect(mapStateToProps,mapDispatchToProps)(PaginationClass);
export default PaginationContainer;