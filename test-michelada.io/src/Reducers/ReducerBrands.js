const ReducerBrands = function( state=[], action ) {
	switch (action.type) {
		case 'ADD_BRAND':
			return state.concat(action.brand)
		case 'ADD_BRANDS':
			return action.brands
		case 'MODIFY_BRAND':
			return state.map(function(brand) {
				if(brand.id === action.brand.id){
					return action.brand
				}
				return brand
			})
		case 'REMOVE_BRAND':
			return state.filter(function(brand) {
				if(brand.id === action.brand.id)
					return
				return brand
			})
		default: return state
	}
}

export default ReducerBrands