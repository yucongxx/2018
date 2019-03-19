import * as TYPES from '../action-types';

let person_action = {
	add() {
		// RETURN的对象就是我们DISPATCH派发的行为对象
		return {
			type: TYPES.PERSON_ADD,
			step: 10
		}
	}
};
export default person_action;