import {
	combineReducers
} from 'redux';
import person_reducer from './person';
import product_reducer from './product';

/*
 * 合并REDUCER
 *   1.合并为最后的REDUCER，当DISPATCH派发的时候，首先执行的是合并后的REDUCER
 *   2.STORE容器中的状态信息也是按照对应的标识存储状态信息的
 *     {
 *        person:{},
 *        product:{}
 *     }
 */
let reducer = combineReducers({
	person: person_reducer,
	product: product_reducer
});
export default reducer;