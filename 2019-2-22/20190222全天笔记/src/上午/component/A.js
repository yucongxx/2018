import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class A extends React.Component{
	render(){
		let {num,xx}=this.props;
		return <div>
			{num} @@@ {xx}
		</div>;
	}
}

export default connect(state=>({...state}))(A);

// connect([mapStateToProps],[mapDispatchToProps])([组件])
// 1.STORE容器中的状态和DISPATCH等都会最后通过属性传递给对应的组件
// 2.所有受CONNECT高阶过的组件，当REDUX状态更改，当前组件都会重新渲染（CONNECT帮我们执行了SUBSCRIBE）
// function mapStateToProps(state){
// 	// state:当前REDUX中存储的状态信息
// 	return {
// 		// 返回的信息当做属性传递给组件
// 		num:state.num
// 	}
// }
// function mapDispatchToProps(dispatch){
// 	// disptach:store.dispatch这个方法
// 	return {
// 		// 返回的信息当做属性传递给组件
// 		add:function(){

// 		}
// 	}
// }
// export default connect(mapStateToProps,mapDispatchToProps)(A);