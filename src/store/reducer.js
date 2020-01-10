const initialState = {
	code: '',
	resultColor: '',
	string: ''
};

const correctCode = '1234';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			const newState = { ...state };
			if (!state.string.includes('*') && state.string !== '') {
				newState.string = '*';
				newState.resultColor = '';
				newState.code = action.number;
				return newState;
			}
			if (state.code.length === 4) {
				return newState;
			}
			return { ...state, code: state.code + action.number, string: state.string + '*' };

		case 'REMOVE':
			return { ...state, string: state.string.slice(0, -1), code: state.code.slice(0, -1) };

		case 'ENTER':
			if (state.code === correctCode) {
				return { ...state, resultColor: 'green', string: 'Access granted!' };
			} else {
				return { ...state, resultColor: 'red', string: 'Invalid code!' }
			}
		default:
			return state;
	}
};

export default reducer;