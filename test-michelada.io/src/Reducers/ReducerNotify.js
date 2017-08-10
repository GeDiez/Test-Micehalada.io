const ReducerNotify = function( state={}, action ) {
	switch (action.type) {
		case 'NOTIFY':
			return {
				...action.msj
			}
		default: 
			return state
	}
}

export default ReducerNotify