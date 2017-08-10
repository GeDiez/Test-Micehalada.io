import React from 'react'

const Modal = function( {id, title, body, btn_save, onClick} ) {
	return (
		<div>
			<div className="modal fade" id={ id } tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title" id="myModalLabel">{ title }</h4>
			      </div>
			      <div className="modal-body">
			        { body }
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={ onClick }>{ btn_save }</button>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	)
}

export default Modal