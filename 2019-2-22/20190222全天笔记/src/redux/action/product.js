import * as T from '../action-types';
let product_action = {
	minus(step) {
		// 真实项目中，我们每一次的行为派发，一般都会伴随着异步操作（总是先向服务器发送请求，然后从服务器获取结果，根据结果，在把获取的信息派发给REDUCER，从而修改容器中的状态信息）

		// 需求：点击按钮，1000MS后再把REDUX中的状态更改
		// setTimeout(() => {
		// 	return {
		// 		type: T.PRODUCT_MINUS,
		// 		step
		// 	};
		// }, 1000);

		// REDUX-PROMISE
		// return {
		// 	type: T.PRODUCT_MINUS,
		// 	// payload：名字不能改，存储的是一个Promise实例，它处理异步操作
		// 	payload: new Promise(resolve => {
		// 		// 真实项目中这块可以是从服务器获取信息
		// 		setTimeout(() => {
		// 			resolve(step);
		// 		}, 1000);
		// 	})
		// };

		// REDUX-THUNK
		return (dispatch) => {
			setTimeout(() => {
				dispatch({
					type: T.PRODUCT_MINUS,
					step
				});
			}, 1000);
		}
	}
};
export default product_action;