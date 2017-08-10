import React from 'react'
import Store from '../Store/Store'
import { modelGetProductById } from '../Models/Products'
import { actionModifyProduct } from '../Actions/ActionsProducts'
import { notify } from '../Actions/ActionsNotify'

const onSubmit = function(ev) {
	ev.preventDefault()
	var product = {
		id: ev.target.id.value,
		name: ev.target.productName.value,
		brand: ev.target.brand.value,
		desc: ev.target.productDesc.value,
		price: ev.target.productPrice.value
	}
	Store.dispatch(actionModifyProduct(product))
}

const comboBrands = function( listBrands=[] ) {
	return listBrands.map(function( brand ) {
		return(
			<option value={brand.name} key={brand.id}>{ brand.name }</option>
			)
	})
}

const ProductModify = function( props ) {
	var productCurrent = modelGetProductById(props.products, props.match.params.id)
	console.log(productCurrent)
	return(
		<form className='form' onSubmit={ onSubmit }>
			<label>Ingresa los datos del producto</label>
			<input name="id" type="hidden" defaultValue={props.match.params.id}/>
			<div className="form-group">
				<input name="productName" type="text" placeholder="¿Nombre de producto?" defaultValue={productCurrent.name}/>
			</div>
			<div className="form-group">
				<input name="productDesc" type="text" placeholder="Descripcion" defaultValue={productCurrent.desc}/>	
			</div>			
			<div className="form-group">
				<select name="brand">
					{ comboBrands( props.brands ) }
				</select>
			</div>
			<div className="form-group">
				<input name="productPrice" type="number" max="100" min="0" placeholder="Precio" defaultValue={productCurrent.price}/>
			</div>
			<input type="submit" value="Modificar"/>
		</form>
		)
}

export default ProductModify