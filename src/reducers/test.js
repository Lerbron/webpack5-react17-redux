import * as actionTypes from '@/actions/actionTypes';

const initState = {num: 5};

export default function test(state = initState, action) {
	switch (action.type) {
		case actionTypes.TEST_NUM :
			return Object.assign({}, state, {num: state.num + 1});
		default :
			return state;
	}
}