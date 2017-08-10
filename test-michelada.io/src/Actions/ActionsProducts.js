import Store from '../Store/Store'
import axios from 'axios'

const actionGetProducts = function() {
	return function(dispatch){
		return axios.get("http://localhost:8000/api/product")
			.then(function(res){
				dispatch({
					type: 'ADD_PRODUCTS',
					products: res.data
				})
			})
		}
}

const actionAddProduct = function(product) {
	return function(dispatch){
		return axios.post("http://localhost:8000/api/product", product)
			.then(function(res){
				dispatch({
					type: 'ADD_PRODUCT',
					product: res.data
				})
			})
		}
}

const actionRemoveProduct = function(id_product) {
	return function(dispatch){
		return axios.delete("http://localhost:8000/api/product/"+id_product)
			.then(function(res){
				dispatch({
					type: 'REMOVE_PRODUCT',
					product: res.data
				})
				dispatch({
					type: 'NOTIFY',
					status: 'success',
					msj: 'Se ha modificado el producto'
				})
			})
		}
}

const actionModifyProduct = function(product) {
	return function(dispatch){
		return axios.put("http://localhost:8000/api/product/"+product.id, product)
			.then(function(res){
				console.log("product updated")
				console.log(res.data)
				dispatch({
					type: 'MODIFY_PRODUCT',
					product: res.data
				})
			})
		}
}

export { actionGetProducts, actionAddProduct, actionRemoveProduct, actionModifyProduct }