import React from 'react';
import style from './Blog.module.css';
import FormContainer from './Form/FormContainer';
import PostsContainer from './Posts/PostsContainer';
function Blog(props) {
	return (<div className={style.blog}>
		<FormContainer></FormContainer>
		<PostsContainer></PostsContainer>
	</div>);
}
export default Blog;