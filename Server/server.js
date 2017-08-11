var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var knex = require('./knex')

var port = 8000
var router = express.Router()

//Middlewares

app.use(bodyParser.json());
app.use(cors())

//Creamos una base de datos de prueba

var db = {
	"products": [
		{
			"id": 1,
			"name": "Zapato",
			"desc": "Casual",
			"price": 40,
			"brand": "CASUAL"
		},
		{
			"id": 2,
			"name": "Tennis",
			"desc": "sport",
			"price": 50,
			"brand": "ADIDAS"
		},
		{
			"id": 3,
			"name": "Zapatilla",
			"desc": "zapato dama",
			"price": 45,
			"brand": "CONVERSE"
		},
		{
			"id": 4,
			"name": "Zapato 2",
			"desc": "urbano",
			"price": 30,
			"brand": "CASUAL"
		},
	],

	"brands": [
		{
			"id": 1,
			"name": "ADIDAS"
		},
		{
			"id": 2,
			"name": "NIKE"
		},
		{
			"id": 3,
			"name": "CONVERSE"
		},
		{
			"id": 4,
			"name": "CASUAL"
		}
	]
}	


//Enrutamos las URIs

router.route('/')
	.get(function( req, res){
		res.json({
			message: 'Wellcome to my API'
		})
	})

// /api/product - GET
router.route('/product')
	.get(function( req, res ) {
		knex.select().table('micheladaTest.product')
			.then(function(collection) {
				console.log(collection)
				res.json(collection)
			})
	})

// /api/product/:id - GET
router.route('/product/:id')
	.get(function( req, res ) {
		knex.select().table('micheladaTest.product')
			.then(function(collection) {
				var product = collection.filter(function(product) {
					if (product.id == req.params.id)
						return product
				})
				res.json(product)
			})
})

// /api/product/:id - POST
router.route('/product')
	.post(function( req, res ) {
		var productNew = req.body
		knex('micheladaTest.product')
		.insert(productNew)
		.returning('id')
			.then(function(id){
				productNew.id = parseInt(id[0])
				res.json(productNew)
			})		
	})

// /api/product/:id - PUT
router.route('/product/:id')
	.put(function( req, res ) {
		knex('micheladaTest.product')
			.where('id', '=', req.params.id)
				.update(req.body)
				.then(function() {
					knex.select()
						.table('micheladaTest.product')
							.where('id', '=', req.params.id)
								.then(function(collection) {
									res.json(collection[0])
								})
				})
	})

// /api/product/:id - DELETE
router.route('/product/:id')
	.delete(function( req, res )	{
		knex('micheladaTest.product')
			.where( 'id', '=', req.params.id )
				.del()
					.then(function() {
						var response = { id:req.params.id }
						res.json(response)
					})
	})

// /api/brand - GET
router.route('/brand')
	.get(function( req, res ) {
		knex.select().table('micheladaTest.brand')
			.then(function(collection) {
				console.log(collection)
				res.json(collection)
			})
	})

// /api/brand/:id - GET
router.route('/brand/:id')
	.get(function( req, res ) {
		knex.select().table('micheladaTest.brand')
			.then(function(collection) {
				var brand = collection.filter(function(brand) {
					if (brand.id == req.params.id)
						return brand
				})
				res.json(brand)
			})
	})

// /api/brand/:id - POST
router.route('/brand')
	.post(function( req, res ) {
		var brandNew = req.body
		knex('micheladaTest.brand')
			.insert(brandNew)
			.returning('id')
			.then(function(id){
				console.log(id)
				brandNew.id = parseInt(id[0])
				res.json(brandNew)
			})
	})

// /api/brand/:id - PUT
router.route('/brand/:id')
	.put(function( req, res ) {
		knex('micheladaTest.brand')
			.where('id', '=', req.params.id)
				.update(req.body)
				.then(function() {
					knex.select()
						.table('micheladaTest.brand')
							.where('id', '=', req.params.id)
								.then(function(collection) {
									res.json(collection[0])
								})
				})
	})

// /api/brand/:id - DELETE
router.route('/brand/:id')
	.delete(function( req, res )	{
		knex('micheladaTest.brand')
			.where( 'id', '=', req.params.id )
				.del()
					.then(function() {
						var response = { id:req.params.id }
						res.json(response)
					})
	})

app.use('/api', router)
app.listen( port )
console.log( 'Server listen on port: ', port )