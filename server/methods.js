Meteor.methods({
	
	getPalettes() {
		var resp = HTTP.get('http://www.colourlovers.com/api/palettes/top?format=json&numResults=100')
		let id = Math.floor((Math.random() * 100) + 1)
		var title = resp.data[id].title,
			colors = resp.data[id].colors,
			author = resp.data[id].userName,
			hearts = resp.data[id].numHearts;
		//console.log(resp.data[id])

		return {
			title: title,
			author: author,
			hearts: hearts,
			c1: colors[0],
			c2: colors[1],
			c3: colors[2],
			c4: colors[3],
			c5: colors[4]
		}

	}

});