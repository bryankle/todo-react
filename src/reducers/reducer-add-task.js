export default function(state = {}, action) {
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