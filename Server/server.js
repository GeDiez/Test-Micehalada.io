var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

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
		res.json(db.products)
	})

// /api/product/:id - GET
router.route('/product/:id')
	.get(function( req, res ) {
		var product = db.products.filter(function(product) {
			if (product.id == req.params.id)
				return product
		})
		res.json(product)
})

// /api/product/:id - POST
router.route('/product')
	.post(function( req, res ) {
		var product = req.body
		product.id = Date.now()
		db.products.push(product)
		res.json(product)
	})

// /api/product/:id - PUT
router.route('/product/:id')
	.put(function( req, res ) {
		var product = req.body
		var productModified
		db.products.forEach(function( p ) {
			if (p.id == req.params.id){
				p.name = product.name
				p.desc = product.desc
				p.price = product.price
				p.brand = product.brand
				productModified = p 
			}
		})
		res.json(productModified)
	})

// /api/product/:id - DELETE
router.route('/product/:id')
	.delete(function( req, res )	{
		var productDelete
		db.products = db.products.filter(function(product) {
			if (product.id == req.params.id){
				productDelete = product
				return
			}
			return product
		})
		res.json(productDelete)
	})

// /api/brand - GET
router.route('/brand')
	.get(function( req, res ) {
		res.json(db.brands)
	})

// /api/brand/:id - GET
router.route('/brand/:id')
	.get(function( req, res ) {
		var brand = db.brands.filter(function(brand) {
			if (brand.id == req.params.id)
				return brand
		})
		res.json(brand)
	})

// /api/brand/:id - POST
router.route('/brand')
	.post(function( req, res ) {
		var brand = req.body
		brand.id = Date.now()
		db.brands.push(brand)
		res.json(brand)
	})

// /api/brand/:id - PUT
router.route('/brand/:id')
	.put(function( req, res ) {
		var brand = req.body
		var brandModified
		db.brands.forEach(function( b ) {
			if (b.id == req.params.id){
				b.name = brand.name
				brandModified = b
			}
		})
		res.json(brandModified)
	})

// /api/brand/:id - DELETE
router.route('/brand/:id')
	.delete(function( req, res )	{
		var brandDelete
		db.brands = db.brands.filter(function(brand) {
			if (brand.id == req.params.id){
				brandDelete = brand
				return
			}
			return brand
		})
		res.json(brandDelete)
	})

app.use('/api', router)
app.listen( port )
console.log( 'Server listen on port: ', port )