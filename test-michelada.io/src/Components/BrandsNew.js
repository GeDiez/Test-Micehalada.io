import React from 'react'
import Store from '../Store/Store'

import { modelCreateBrand } from '../Models/Brands'
import { actionAddBrand } from '../Actions/ActionsBrands'

const onSubmit = function( ev ) {
	ev.preventDefault()
	var newBrand = {
		name: ev.target.brandName.value
	}
	if( newBrand !== undefined ){
		Store.dispatch(actionAddBrand(newBrand))
	}
}

const BrandsNew = function( props ) {
	return (
		<form className='form' onSubmit={ onSubmit }>
			<label>Crear una marca</label>
			<div className="form-group">
				<input name="brandName" type="text" placeholder="¿Como se llama la marca?" required/>
			</div>			
			<input type="submit" value="crear"/>
		</form>
	)
}

export default BrandsNew