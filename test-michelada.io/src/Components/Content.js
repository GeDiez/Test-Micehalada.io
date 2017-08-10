import React from 'react'
import { Route } from 'react-router-dom'


import ProductNew from './ProductNew'
import ProductList from './ProductList'
import ProductModify from './ProductModify'
import BrandsNew from './BrandsNew'
import BrandsList from './BrandsList'
import BrandsModify from './BrandsModify'
import Aboutme from './Aboutme'

const routeToBrands = function(props) {
	return function() {	return <BrandsNew brands={props.brands}/> }
}

const routeToBrandsList = function( props ) {
	return function() {	return <BrandsList brands={props.brands}/> }
}

const routeToBrandsModify = function(props) {
	return function(propsRoute) { return <BrandsModify  brands={props.brands} {...propsRoute}/>	}
}

const routeToProducts = function(props) {
	return function(){ return <ProductNew brands={props.brands}/> }
}

const routeToProductsList = function( props ) {
	return function() {	return <ProductList products={props.products}/> }
}

const routeToProductModify = function( props ) {
	return function(propsRoute) {	return (<ProductModify products={props.products} brands={props.brands} {...propsRoute}/>)
	}
}

const Content = function( props ) {
	return(
		<div className="content">
			<div className='panel panel-default'>
				<div className='panel-body'>
					<div className="page-header">
					  <h1>Aplicacion Productos y Marcas <small> michelada.io </small></h1>
					</div>									
					<Route path="/brands/new" 		component={ routeToBrands(props) }/>
					<Route path="/brands/list" 		component={ routeToBrandsList(props) }/>
					<Route path="/brands/modify/:id" 	component={ routeToBrandsModify(props) }/>
					<Route path="/product/new" 		component={ routeToProducts(props) }/>
					<Route path="/product/list" 	component={ routeToProductsList(props) }/>
					<Route path="/products/modify/:id" 	component={ routeToProductModify(props) }/>
					<Route path="/Aboutme" component={ Aboutme }></Route>
				</div>
			</div>
		</div>
		)
}

export default Content