import React from 'react';
import style from './Post.module.css';
import {NavLink} from 'react-router-dom';
function Post(props) {
	console.log(props.postData);
	return (<div className={style.post}>
		<NavLink to='/photo'><img className={style.image} src={props.postData.url} alt="" /></NavLink>
	</div>);
}
export default Post;