import {
	createStore,
	applyMiddleware
} from 'redux';
import reducer from './reducer/index';

// 中间件 yarn add redux-logger redux-thunk redux-promise ...
// LOGGER：在控制台输出每一次行为派发之前和之后的状态信息上
// THUNK和PROMISE：都是管控派发行为是异步操作的情况
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

let store = createStore(reducer, applyMiddleware(reduxLogger, reduxThunk, reduxPromise));
export default store;