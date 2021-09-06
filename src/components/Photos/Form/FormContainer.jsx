import { connect } from 'react-redux';
import React from 'react';
import Form from './Form';
import {writeName,writeKeywords,setPhoto,SetPostsAC} from '../../../redux/reducers/blogReducer';
import * as axios from 'axios';
class FormClass extends React.Component{
	onSubmitForm=()=>{
		let payload={//Данные записи
			url: this.props.photoURL,
			author: this.props.nameWritten,
			keywords: this.props.keywordsWritten
		}
		if(payload.url!==null&&payload.author!==''&&payload.keywords!==''){//Если форма полностью заполнена
		axios.post('http://localhost:8000/photos',{data:payload})//Запрос, отправляющий записьч через API в базу данных
		.then(post=>{
			axios.get(`http://localhost:8000/photos?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`).then(response=>{
				this.props.SetPostsAC(response.data);//Добавление трёх записей для обновления блога
			})
		})
		}

	}
	render(){
		return (<Form writeName={this.props.writeName}
		writeKeywords={this.props.writeKeywords}
		writeText={this.props.writeText}
		onSubmitForm={this.onSubmitForm}
		setPhoto={this.props.setPhoto}>
		</Form>);
	}
}

let mapStateToProps=(state)=>{
	return {
		nameWritten:state.blogPage.nameWritten,
		keywordsWritten:state.blogPage.keywordsWritten,
		currentPage:state.blogPage.currentPage,
		pageSize:state.blogPage.pageSize,
		photoURL:state.blogPage.photoURL
	}
}
const FormContainer = connect(mapStateToProps,{
	writeName,
	writeKeywords,
	setPhoto,
	SetPostsAC
})(FormClass);
export default FormContainer;