import React from 'react'
import { Link } from 'react-router-dom'
import { actionRemoveBrand } from '../Actions/ActionsBrands'
import { actionModifyBrand } from '../Actions/ActionsBrands'
import Store from '../Store/Store'
import Modal from './Modal'

let idSelected = undefined

const clickRemove = function() {
	Store.dispatch(actionRemoveBrand(idSelected))
}

const saveIdSelected = function( ev ) {
	idSelected = ev.target.id
}

const listOfBrands = function( brands ) {
	return brands.map(function( brand ) {
		return <li key={ brand.id } className="list-group-item">
			<p className="btn-remove btn-opciones-list" onClick={saveIdSelected}>
				<span className="badge">
					<span className="glyphicon glyphicon-remove" aria-hidden="true" id={brand.id} data-toggle="modal" data-target="#modal-remove"/>
				</span>
			</p>
			<p className="btn-editar btn-opciones-list">
				<span className="badge">
					<Link to={"/brands/modify/"+brand.id } style={{color: 'white'}}>
						<span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
					</Link>					
				</span>
			</p>
				<b>Nombre:</b> { brand.name }
		</li>
	})
}

const BrandsList = function( props ) {
	return (<div>
		<ul className="list-group">
		  { listOfBrands( props.brands ) }
		</ul>
		<Modal 
			id="modal-remove"
			title="Eliminar Marca" 
			body="La marca sera eliminada permanentemente." 
			btn_save="¿Desea continuar?"
			onClick={clickRemove} >
		</Modal>
	</div>)
	
}

export default BrandsList