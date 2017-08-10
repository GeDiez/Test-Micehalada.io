const ReducerProducts = function( state=[], action ) {
	switch(action.type) {
		case 'ADD_PRODUCT':
			return state.concat(action.product)
		case 'ADD_PRODUCTS':
			return action.products
		case 'REMOVE_PRODUCT':
			return state.filter(function(product) {
				if(product.id === action.product.id)
					return
				return product
			})
		case 'MODIFY_PRODUCT':
			return state.map(function(product) {
				if(product.id === action.product.id){
					return action.product
				}
				return product
			})
		default: return state
	}
}

export default ReducerProducts