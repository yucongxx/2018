import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class B extends React.Component{
	render(){
		return <div>
			<button onClick={()=>{
				this.props.click();
			}}>+</button>
		</div>;
	}
}
export default connect(null,dispatch=>{
	return {
		click(){
			dispatch({
				type:'UPDATE_NUM'
			});
		}
	}
})(B);