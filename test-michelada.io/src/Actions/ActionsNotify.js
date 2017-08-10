import Store from '../Store/Store'

const notify =  function( msj ) {
	Store.dispatch({
		type: 'NOTIFY',
		msj
	})
}

export { notify } 