import { connect } from 'react-redux';
import React from 'react';
import Posts from './Posts';
class PostsClass extends React.Component{
	render(){
		return (<Posts posts={this.props.posts}></Posts>);
	}
}

let mapStateToProps=(state)=>{
	return {
		posts:state.blogPage.posts
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
	}
}
const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(PostsClass);
export default PostsContainer;