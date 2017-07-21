export default function(state = {}, action) {
	switch(action.type) {
		case "COMPLETE_TASK":
			return Object.assign(
				{},
				state,
				{
					[action.task]: {
						'completed': true
					}
				}	
				)
		default:
			return state;
	}
}