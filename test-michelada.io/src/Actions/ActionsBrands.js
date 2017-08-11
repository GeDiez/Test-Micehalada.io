import { notify } from './ActionsNotify'
import axios from 'axios'

const actionGetBrands = function() {
	return function(dispatch){
		return axios.get("http://localhost:8000/api/brand")
			.then(function(res){
				dispatch({
					type: 'ADD_BRANDS',
					brands: res.data
				})				
			})
		}
}

const actionAddBrand = function(brand) {
	return function(dispatch){
		return axios.post("http://localhost:8000/api/brand", brand)
			.then(function(res){
				dispatch({
					type: 'ADD_BRAND',
					brand: res.data
				})
				dispatch(notify({
					type: 'NOTIFY',
					status: 'success',
					msj: 'Se ha creado una nueva marca : ' + res.data.name
				}))
			})
		}
}

const actionRemoveBrand = function(id_brand) {
	return function(dispatch){
		return axios.delete("http://localhost:8000/api/brand/"+id_brand)
			.then(function(res){
				dispatch({
					type: 'REMOVE_BRAND',
					brand: res.data
				})
				dispatch(notify({
					status: 'success',
					msj: 'Se ha eliminado la marca: '+res.data.name
				}))
			})
		}
}

const actionModifyBrand = function(brand) {
	return function(dispatch){
		return axios.put("http://localhost:8000/api/brand/"+brand.id, brand)
			.then(function(res){
				dispatch({
					type: 'MODIFY_BRAND',
					brand: res.data
				})
				dispatch(notify({
					status: 'success',
					msj: 'Se ha modificado la marca: '+res.data.name
				}))
			})
		}
}


export { actionGetBrands, actionAddBrand, actionRemoveBrand, actionModifyBrand }