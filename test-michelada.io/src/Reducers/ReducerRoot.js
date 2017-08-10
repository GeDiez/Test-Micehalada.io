import { combineReducers } from 'redux'
import ReducerBrands from './ReducerBrands'
import ReducerProducts from './ReducerProducts'
import ReducerNotify from './ReducerNotify'

const ReducerRoot = combineReducers({
	brands: ReducerBrands,
	products: ReducerProducts,
	notify: ReducerNotify
})

export default ReducerRoot