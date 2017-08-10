import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ReducerRoot from '../Reducers/ReducerRoot'

const Store = createStore( 
	/* Reducr general de la aplicacion*/
	ReducerRoot ,
	/* Estado general de la app*/
	{
		brands: [],
		products: [],
		notify: {}
	},
	/* Middlewares */
	applyMiddleware(thunk)
	)

export default Store