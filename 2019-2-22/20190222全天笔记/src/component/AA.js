import React from 'react';
import {
	connect
} from 'react-redux';
import action from '../redux/action/index';

class AA extends React.Component {
	render() {
		return <div>
			{this.props.m}
			<button onClick={()=>{
				this.props.minus(5);
			}}>-</button>
		</div>;
	}
}
export default connect(state => state.product, action.product)(AA);