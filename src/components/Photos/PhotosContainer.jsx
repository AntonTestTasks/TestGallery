import { connect } from 'react-redux';
import React from 'react';
import Photos from './Photos';
import * as axios from 'axios';
import {SetPostsAC} from '../../redux/reducers/photosReducer';

class PhotosClass extends React.Component{
	componentDidMount(){
		axios.get(`http://localhost:8000/photos?_page=0&_limit=${this.props.pageSize}`).then(response=>{
			this.props.setPosts(response.data);//Установка первоначальных 3 записей при загрузе компонента
		})
	}
	render(){
		return (<Photos></Photos>);
	}
}

let mapStateToProps=(state)=>{
	return {
		pageSize:state.blogPage.pageSize
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
		setPosts:(posts)=>{dispatch(SetPostsAC(posts))}
	}
}
const PhotosContainer = connect(mapStateToProps,mapDispatchToProps)(PhotosClass);
export default PhotosContainer;