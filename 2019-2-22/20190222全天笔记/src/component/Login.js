import React from 'react';
import {connect} from 'react-redux';
import action from '../redux/action/index';

class Login extends React.Component{
	render(){
		return <div>
			<button onClick={()=>{
				this.props.add();
			}}>+</button>
		</div>;
	}
}
export default connect(null,action.person)(Login);

