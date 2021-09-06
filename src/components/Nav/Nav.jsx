import React from 'react';
import style from './Nav.module.css';
import { NavLink} from "react-router-dom";
function Nav(props) {
	let onClickBlog=()=>{
		props.setTitle('blog')
	}
	let onClickSearch=()=>{
		props.setTitle('search')
	}
	return (<nav className={style.nav}>
		<ul className={style.ul}>
			<li className={style.item}><NavLink to="/blog" onClick={onClickBlog} activeClassName={style.active}>Фото</NavLink></li>
			<li className={style.item}><NavLink to="/search" onClick={onClickSearch} activeClassName={style.active}>Поиск</NavLink></li>
			<li className={style.slideEffect}></li>
		</ul>
	</nav>);
}
export default Nav;