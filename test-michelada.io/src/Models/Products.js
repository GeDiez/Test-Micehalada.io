const modelGetProductById = function(products, id_product) {
	return products.filter(function(product){
		if(product.id == id_product)
			return product
	})[0]
}

const modelCreateProduct = function(name, brand, desc, price) {
	if(typeof name === "" || typeof brand === "" || desc === "" || price === "")
		return
	return {
		id: Date.now(),
		name,
		brand, 
		desc,
		price
	}
}

const modelUpdateProduct = function(products, product) {
	products.filter(function(p) {
		if (product.id === p.id){
			return product
		}
		return p
	})
}

const modelSumPrices = function(products){
	return products.reduce(function(vi, v) {
		return vi + parseInt(v.price)
	}, 0)
}
export { modelGetProductById, modelCreateProduct, modelSumPrices }