import React from 'react'
import Store from '../Store/Store'
import { Link } from 'react-router-dom'
import { modelSumPrices } from '../Models/Products'
import { actionRemoveProduct, actionModifyProduct } from '../Actions/ActionsProducts'
import Modal from './Modal'

let idSelected = undefined

const clickRemove = function() {
	Store.dispatch(actionRemoveProduct(idSelected))
}

const saveIdSelected = function( ev ) {
	idSelected = ev.target.id
}

const listOfPrducts = function( products ) {
	return products.map(function( product ) {
		return <li key={ product.id } className="list-group-item">
			<p className="btn-remove btn-opciones-list" onClick={saveIdSelected}>
				<span className="badge">
					<span className="glyphicon glyphicon-remove" aria-hidden="true" id={product.id} data-toggle="modal" data-target="#modal-remove"/>
				</span>
			</p>
			<p className="btn-editar btn-opciones-list">
				<span className="badge">
					<Link to={"/products/modify/"+product.id } style={{color: 'white'}}>
						<span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
					</Link>					
				</span>
			</p>
				<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
					<tbody>
						<tr>
							<td><b>	Nombre:</b> { product.name } <b>Descripcion:</b> { product.desc }</td>
						</tr>
						<tr>
							<td><b>	Marca:</b> { product.brand } <b>	Price: </b>{ product.price }</td>
						</tr>
					</tbody>
				</table>				    
		</li>
	})
}

const ProductList = function( props ) {
	return( <div>
		<ul className="list-group">
		  { listOfPrducts( props.products ) }
		</ul>
		<p>suma total de los productos: { modelSumPrices(props.products)} pesos M/N</p>
		<Modal 
			id="modal-remove"
			title="Eliminar producto" 
			body="El producto sera borrado y no se podran deshacer cambios." 
			btn_save="¿Desea continuar?"
			onClick={clickRemove} >
				hola mundo
		</Modal>
	</div>
	)
}

export default ProductList