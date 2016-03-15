Meteor.methods({
	
	getPalettes() {
		var resp = HTTP.get('http://www.colourlovers.com/api/palettes/random?format=json')
		var title = resp.data[0].title,
			colors = resp.data[0].colors,
			author = resp.data[0].userName
	
		return {
			title: title,
			author: author,
			c1: colors[0],
			c2: colors[1],
			c3: colors[2],
			c4: colors[3],
			c5: colors[4]
		}
	}

});