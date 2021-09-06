import { connect } from 'react-redux';
import React from 'react';
import Nav from './Nav.jsx';
import {SetTitleAC} from '../../redux/reducers/navReducer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
class NavClass extends React.Component{
	render(){
		return (<>
			<HelmetProvider>
				<Helmet>
					{/* Компонента для установки названия документа */}
					<title>{this.props.title}</title>
				</Helmet>
			</HelmetProvider>
		<Nav title={this.props.title} setTitle={this.props.setTitle}></Nav>
		</>);
	}
}

let mapStateToProps=(state)=>{
	return {
		title:state.nav.title
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
		setTitle:(title)=>{dispatch(SetTitleAC(title))}
	}
}
const NavContainer = connect(mapStateToProps,mapDispatchToProps)(NavClass);
export default NavContainer;