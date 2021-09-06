import React from 'react';
import style from './Photo.module.css';
function Photo(props) {
	return (<div className={style.post}>
		<div>
			<div className={style.logo}>
				{props.postData.logo === "" ?
					<img src={props.postData.logo} alt="" className={style.logoImage} /> :
					<img src="logo.png" className={style.logoImage} alt="" />}
			</div>
			<div className={style.author}>{props.postData.author}</div>
		</div>
		<div>
			<div className={style.title}><span>{props.postData.title}</span></div>
			<p className={style.text}>{props.postData.text}</p>
		</div>
	</div>);
	
}
export default Photo;