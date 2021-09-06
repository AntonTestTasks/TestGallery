import React from 'react';
import style from './Form.module.css';
let Form =(props)=>{
		let searchRef = React.createRef();
		let onWriteText=()=>{
			let searchText = searchRef.current.value;
			props.writeText(searchText);
		}
		let handleSubmit=(event)=>{
			event.preventDefault();
		}
        return (<div className={style.formDiv}>
			<form action="/result?#" className={style.form} onSubmit={handleSubmit}>
				<div className={style.title}><span className={style.titleText}>Поиск записей</span></div>
				<input ref={searchRef} className={style.search} onChange={onWriteText} type="text" name="search" />
				<button className={style.formSubmit} onClick={props.onSubmitForm}>Поиск</button>
			</form>
		</div>);
}
export default Form;