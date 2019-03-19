import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import A from './component/A';
import B from './component/B';

// redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let INIT_STATE={
	num:10
};
const reducer=(state=INIT_STATE,action)=>{
	switch(action.type){
		case 'UPDATE_NUM':
			state.num=state.num+1;
			break;
	}
	return JSON.parse(JSON.stringify(state));
};
const store=createStore(reducer);

// 设置祖先组件，把STORE存储在组件的上下文中，后代元素需要使用，直接基于上下文获取即可（告别了属性逐层传递）
/*
class Provider extends React.Component{
	// 设置上下文信息存储STORE
	static childContextTypes={
		store:PropTypes.object
	};
	getChildContext(){
		return {
			store:this.props.store
		}
	}
	render(){
		return this.props.children;
	}
}
*/


ReactDOM.render(<Provider store={store}>
	<A xx={12}></A>
	<B></B>
</Provider>, document.getElementById('root'));