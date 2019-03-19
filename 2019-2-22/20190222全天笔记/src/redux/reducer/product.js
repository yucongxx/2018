import * as T from '../action-types';

function product_reducer(state = {
	n: 0,
	m: 0
}, action) {
	state = JSON.parse(JSON.stringify(state));
	let {
		type,
		step,
		payload
	} = action;
	switch (type) {
		case T.PRODUCT_MINUS:
			state.m -= step;
			// state.m -= payload;
			break;
	}
	return state;
}
export default product_reducer;