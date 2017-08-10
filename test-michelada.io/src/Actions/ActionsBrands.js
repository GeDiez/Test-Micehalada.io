import Store from '../Store/Store'
import axios from 'axios'

const actionGetBrands = function() {
	return function(dispatch){
		return axios.get("http://localhost:8000/api/brand")
			.then(function(res){
				console.log(res.data)
				dispatch({
					type: 'ADD_BRANDS',
					brands: res.data
				})
			})
		}
}

const actionAddBrand = function( brand ) {
	Store.dispatch({
		type: 'ADD_BRAND',
		brand
	})
}

const actionRemoveBrand = function( idBrand ){
	//
}

const actionModifyBrand = function() {

}

export { actionGetBrands, actionAddBrand, actionRemoveBrand, actionModifyBrand }