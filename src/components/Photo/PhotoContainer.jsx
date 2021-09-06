import { connect } from 'react-redux';
import React from 'react';
import Photo from './Photo';
import * as axios from 'axios';

class PhotoClass extends React.Component{
	render(){
		return (<Photo></Photo>);
	}
}

let mapStateToProps=(state)=>{
	return {
	
	}
}
const PhotoContainer = connect(mapStateToProps,{})(PhotoClass);
export default PhotoContainer;