import React from 'react'
import { modelGetBrandById } from '../Models/Brands'
import { actionModifyBrand } from '../Actions/ActionsBrands'
import { notify } from '../Actions/ActionsNotify'

const onSubmit = function(ev) {
	ev.preventDefault()
	var brand = {
		name: ev.target.brandName.value,
	}
	actionModifyBrand(brand)
}

const BrandModify = function( props ) {
	console.log(props)
	var brandCurrent = modelGetBrandById(props.brands, props.match.params.id)
	return(
		<form className='form' onSubmit={ onSubmit }>
			<label>Actualizar marca</label>
			<div className="form-group">
				<input name="brandName" type="text" placeholder="Renombrar marca" value={brandCurrent.name}/>
			</div>
			<input type="submit" value="Modificar"/>
		</form>
		)
}

export default BrandModify