Palettes = new Mongo.Collection('palettes');

Palettes.allow({
	insert() {
		return true
	}
})