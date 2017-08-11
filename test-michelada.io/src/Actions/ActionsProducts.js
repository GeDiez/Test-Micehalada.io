import { notify } from './ActionsNotify'
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
				dispatch(notify({
					msj: 'Nuevo producto con nombre: '+res.data.name,
					status: 'success'

				}))
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
				dispatch({
					type: 'MODIFY_PRODUCT',
					product: res.data
				})
			})
		}
}

export { actionGetProducts, actionAddProduct, actionRemoveProduct, actionModifyProduct }