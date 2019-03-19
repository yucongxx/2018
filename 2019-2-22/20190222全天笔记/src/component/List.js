import React from 'react';
import {connect} from 'react-redux';

class List extends React.Component{
	render(){
		return <div>
			{this.props.n}
		</div>;
	}
}
export default connect(state=>({...state.person}))(List);