import React from 'react'
import Store from '../Store/Store'
import { modelCreateProduct } from '../Models/Products'
import { actionAddProduct } from '../Actions/ActionsProducts'
import { notify } from '../Actions/ActionsNotify'

const onSubmit = function(ev) {
	ev.preventDefault()
	var newProduct = {
		name: ev.target.productName.value,
		brand: ev.target.brand.value,
		desc: ev.target.productDesc.value,
		price: ev.target.productPrice.value
	}
	if( newProduct !== undefined ){
		Store.dispatch(actionAddProduct(newProduct))
		notify({
			type: 'NOTIFY',
			status: 'success',
			msj: 'Producto nuevo creado: '+newProduct.name
		})
	}
}

const comboBrands = function( listBrands=[] ) {
	return listBrands.map(function( brand ) {
		return(
			<option value={brand.name} key={brand.id}>{ brand.name }</option>
			)
	})
}

const ProductNew = function( props ) {
	if (props.brands.length === 0)
		return (<div> No existen marcas registradas, registra una nueva</div>)
	return(
		<form className='form' onSubmit={ onSubmit }>
			<label>Ingresa los datos del producto</label>
			<div className="form-group">
				<input name="productName" type="text" placeholder="¿Nombre de producto?" required/>
			</div>
			<div className="form-group">
				<input name="productDesc" type="text" placeholder="Descripcion" required/>	
			</div>			
			<div className="form-group">
				<select name="brand" required>
					{ comboBrands( props.brands ) }
				</select>
			</div>
			<div className="form-group">
				<input name="productPrice" type="number" max="100" min="0" placeholder="Precio" required/>	
			</div>
			<input type="submit" value="crear"/>
		</form>
		)
}

export default ProductNew