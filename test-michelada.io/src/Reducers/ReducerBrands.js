const ReducerBrands = function( state=[], action ) {
	switch (action.type) {
		case 'ADD_BRAND':
			return state.concat(action.brand)
		case 'ADD_BRANDS':
			return action.brands
		default: return state
	}
}

export default ReducerBrands