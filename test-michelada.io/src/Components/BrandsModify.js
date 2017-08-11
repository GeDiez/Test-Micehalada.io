import React from 'react'
import Store from '../Store/Store'
import { modelGetBrandById } from '../Models/Brands'
import { actionModifyBrand } from '../Actions/ActionsBrands'
import { notify } from '../Actions/ActionsNotify'

const onSubmit = function(ev) {
	ev.preventDefault()
	var brand = {
		id: ev.target.brandId.value,
		name: ev.target.brandName.value
	}
	Store.dispatch(actionModifyBrand(brand))
}

const BrandModify = function( props ) {
	var brandCurrent = modelGetBrandById(props.brands, props.match.params.id)
	return(
		<form className='form' onSubmit={ onSubmit }>
			<label>Actualizar marca</label>
			<input type="hidden" name="brandId" defaultValue={ brandCurrent.id } />
			<div className="form-group">
				<input name="brandName" type="text" placeholder="Renombrar marca" defaultValue={brandCurrent.name}/>
			</div>
			<input type="submit" value="Modificar"/>
		</form>
		)
}

export default BrandModify