export function demo(state, action) {
	switch (action.type) {
		case 'IS_DEMO_ACTIVE':
			return {
				...state,
				demo: {
					isActive: action.payload,
				}
			};
		default:
			return state;
	}
}
