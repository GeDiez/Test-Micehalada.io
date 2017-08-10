const modelGetBrandById = function(brands, idBrand) {
	return brands.filter(function(brand) {
		if (brand.id == idBrand) 
			return brand
	})[0]
}

const modelCreateBrand = function( name ) {
	if (name == undefined)
		return
	return {
		id: Date.now(),
		name
	}
}

export { modelCreateBrand, modelGetBrandById }