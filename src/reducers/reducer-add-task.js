export default function(state = {'test': 'lol'}, action) {
	switch(action.type) {
		case "ADD_TASK":
			return Object.assign(
				{},
				state,
				{
					[action.task]: {
						'completed': false
					}
				}	
				)
		default:
			return state;
	}
}