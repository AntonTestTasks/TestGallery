import React from 'react';
import style from './Form.module.css';
function Form(props) {
	let nameRef=React.createRef();
	let keywordsRef=React.createRef();
	let photoRef=React.createRef();
	let onWriteName=()=>{
		let name=nameRef.current.value;
		props.writeName(name);
	}
	let onWriteKeywords=()=>{
		let keywords=keywordsRef.current.value;
		props.writeKeywords(keywords);
	}
	let onUploadPhoto=()=>{
		let photo=URL.createObjectURL(photoRef.current.files[0]);
		if(photo)props.setPhoto(photo);
	}
	let handleSubmit=(e)=>{
		e.preventDefault();
		props.onSubmitForm();
	}
	return (<div className={style.formDiv}>
		<form className={style.form} action="#" onSubmit={handleSubmit}>
			<div className={style.title}><span className={style.titleText}>Добавить фото</span></div>
			<label htmlFor="name">Ваш никнейм:</label>
			<br/>
			<input ref={nameRef} className={style.input} onInput={onWriteName} type="text" id="name"/>
			<br/>
			<label htmlFor="keywords">Ключевые слова:</label>
			<br/>
			<input ref={keywordsRef} className={style.input} onInput={onWriteKeywords} type="text" id="keywords"/>
			<br/>
			<label htmlFor="text">Фото:</label>
			<br/>
			<input type="file" ref={photoRef} onInput={onUploadPhoto} name="photo" accept="image/jpeg,image/png"/>
			<br/>
			<input type="submit" className={style.formSubmit} value="Добавить"/>
		</form>
	</div>);
}
export default Form;