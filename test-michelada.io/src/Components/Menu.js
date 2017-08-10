import React from 'react'
import { Link } from 'react-router-dom'

const Menu = function(props) {
	return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" href="/">Products and Marks</a>
		    </div>
		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		    	<ul className="nav navbar-nav">		        
		        <li className="dropdown">
		          <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Productos <span className="caret"></span></a>
		          <ul className="dropdown-menu">
		            <li><Link to="/product/new">Crear</Link></li>
		            <li><Link to="/product/list">Lista</Link></li>
		          </ul>
		        </li>
		        <li className="dropdown">
		          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Marcas <span className="caret"></span></a>
		          <ul className="dropdown-menu">
		          	<li><Link to="/brands/new">Crear</Link></li>
		            <li><Link to="/brands/list">Lista</Link></li>
		          </ul>
		        </li>
		        <li><Link to="/Aboutme">About me :)</Link></li>
		      </ul>
		    </div>
		  </div>
		</nav>
		)
}

export default Menu