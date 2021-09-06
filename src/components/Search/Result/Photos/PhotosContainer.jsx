import { connect } from 'react-redux';
import React from 'react';
import Photos from './Photos';

class PhotosClass extends React.Component{
	render(){
		return (<Photos posts={this.props.searchedPosts} searchedText={this.props.searchedText}></Photos>);
	}
}

let mapStateToProps=(state)=>{
	return {
		searchedPosts:state.searchPage.searchedPosts,
		searchedText:state.searchPage.searchedText
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
	}
}
const PhotosContainer = connect(mapStateToProps,mapDispatchToProps)(PhotosClass);
export default PhotosContainer;