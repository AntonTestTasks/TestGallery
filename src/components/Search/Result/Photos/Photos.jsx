import React from 'react';
import style from './Photos.module.css';
import Photo from './Photo/Photo';
import PaginationContainer from './Pagination/PaginationContainer';
function Photos(props) {
	let posts;
	if(props.posts.length>0){
		posts=props.posts.map(post=>{
			return <Photo key={post.id} searchedText={props.searchedText} postData={post.data}></Photo>
		});
	}
	return (<div className={style.posts}>
		{props.posts.length>0 && <div className={style.title}><span >Записи:</span></div>}
		{posts}
		{props.posts.length>0 && <PaginationContainer></PaginationContainer>}
	</div>);
}
export default Photos;