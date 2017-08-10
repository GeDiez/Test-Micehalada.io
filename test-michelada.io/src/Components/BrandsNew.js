import React from 'react'

import { modelCreateBrand } from '../Models/Brands'
import { actionAddBrand } from '../Actions/ActionsBrands'
import { notify } from '../Actions/ActionsNotify'

const onSubmit = function( ev ) {
	ev.preventDefault()
	var newBrand = modelCreateBrand(
		ev.target.brandName.value
	)
	if( newBrand !== undefined ){
		actionAddBrand(newBrand)
		notify({
			type: 'NOTIFY',
			status: 'success',
			msj: 'Se ha creado una nueva marca : ' + newBrand.name
		})
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