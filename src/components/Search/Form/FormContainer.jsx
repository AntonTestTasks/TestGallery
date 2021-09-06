import { connect } from 'react-redux';
import React from 'react';
import Form from './Form';
import {SetSearchedPostsAC,WriteTextAC,SetSearchedTextAC} from '../../../redux/reducers/searchReducer';
import * as axios from 'axios';

class FormClass extends React.Component{
	onSubmitForm=()=>{
		if(this.props.textWritten!==''){//Если есть значение вводимого текста с поиска 
			axios.get(`http://localhost:8000/posts?q=${this.props.textWritten}&_page=0&_limit=${this.props.pageSize}`)
			.then(response=>{//Запрос, получающий текущие 3 записи
				this.props.setSearchedText(this.props.textWritten);//Добавление находимого текста
				this.props.setSearchedPosts(response.data);//Добавление трёх записей для обновления результата поиска
			});
		}
	}
render(){
	return (<Form
	writeText={this.props.writeText}
	onSubmitForm={this.onSubmitForm}
	></Form>);
}
}

let mapStateToProps=(state)=>{
	return {
		textWritten:state.searchPage.textWritten,
		pageSize:state.searchPage.pageSize
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
		writeText:(text)=>{dispatch(WriteTextAC(text))},
		setSearchedPosts:(searchedPosts)=>{dispatch(SetSearchedPostsAC(searchedPosts))},
		setSearchedText:(searchedText)=>{dispatch(SetSearchedTextAC(searchedText))}
	}
}
const SearchContainer = connect(mapStateToProps,mapDispatchToProps)(FormClass);
export default SearchContainer;