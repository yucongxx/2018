import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
	static childContextTypes = {
		store: PropTypes.object
	};
	getChildContext() {
		return {
			store: this.props.store
		}
	}
	render() {
		return this.props.children;
	}
}

function connect(mapStateToProps, mapDispatchToProps) {
	let emptyFn = new Function('');
	mapStateToProps=typeof mapStateToProps!=='function'?emptyFn:mapStateToProps;
	mapDispatchToProps=typeof mapDispatchToProps!=='function'?emptyFn:mapDispatchToProps;

	return function (Component) {
		// 经过CONNECT高阶过的是代理组件PROXY（高阶组件）
		return class Proxy extends React.Component {
			//1.从上下文中获取STORE
			static contextTypes = {
				store: PropTypes.object
			};

			//2.在组件加载完成后，向STORE的事件池中追加一个方法，当状态改变，通知当前组件重新渲染
			componentDidMount() {
				this.context.store.subscribe(() => {
					this.forceUpdate();
				});
			}

			//3.编写一个公共方法：把传递的回调函数mapxxx执行，接收返回的结果，方便后期作为属性传递给对应的组件
			queryInfo = () => {
				let {
					store
				} = this.context,
					state = store.getState(),
					action = {};
				state = mapStateToProps(state);
				action = mapDispatchToProps(store.dispatch);
				return {
					...state,
					...action
				}
			};

			render() {
				let info = this.queryInfo();
				return <Component {...info} {...this.props}/> ;
				//把基于mapxxx获取的信息和单独传递给Proxy组件的属性都作为最后的属性传递给对应的组件
			}
		}
	}
}

export {
	Provider,
	connect
};