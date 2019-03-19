import * as TYPES from '../action-types';

function person_reducer(state = {
	n: 10
}, action) {
	state = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case TYPES.PERSON_ADD:
			let step = action.step;
			state.n = state.n + step;
			break;
	}
	return state;
}
export default person_reducer;