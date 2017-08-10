import React from 'react'

const Notifies = function( props ) {
	if (props.notify.status !== null) 
		return(
			<div>
				<div className={'alert alert-dismissible fade in alert-'+props.notify.status}>
					<button type="button" className="close" data-dismiss="alert" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
					{ props.notify.msj }
				</div>
			</div>
			
			)
}

export default Notifies