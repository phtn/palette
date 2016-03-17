Template.main.rendered = function() {
	getSessionColours()
	//var result = Meteor.http.get('http://www.colourlovers.com/api/palettes/random?format=json')

	//console.log(result.data[0].title)
	

	var vMain = new Vue ({
		el: '#main',
		
		data: {
		
			'header': Session.get('getColourTitle'),
			'counter': 0
			
		},

		sync: {

			'palts': function() {
				return Palettes.find({}).fetch()
			}

		},
		
		methods: {
				//
			}
		
	});



}

// EVENTS
Template.main.events({
	'click .next-div' () {
		

		Meteor.call('getPalettes', (err, res) => {
			Session.setPersistent('getPaletteTitle', res)
		});
		
		$('.paletteTitle').fadeTo(100, .1)
		$('.paletteTitle').fadeTo(100, 1)

		$('#right').fadeTo(100, .1)
		$('#right').fadeTo(100, 1)
		
		getSessionColours();
		
		//rotateMenu(Math.floor((Math.random() * 7) ));
		var random = Math.floor((Math.random() * 100) + 1);
		var rad = 57.2958;
		rotateMenu(Session.get('getPaletteTitle').hearts * random)

		//$('#menu').css('-webkit-transform','rotate('+ 0 +'deg)');

	},

	'click .panel-one' () {
		
		alertInfo('.panel-one', '1')

	},

	'click .panel-two' () {
		
		alertInfo('.panel-two')

	},

	'click .panel-three' () {
		alertInfo('.panel-three')
	},

	'click .panel-four' () {
		alertInfo('.panel-four')
	},

	'click .panel-five' () {
		alertInfo('.panel-five')
	},
	'click li' () {
		console.log('top')
	},
	'click #rand' () {
		console.log('rand')
	}
	
});

// HELPERS
Template.main.helpers({
	title() {
		return Session.get('getPaletteTitle').title
	},
	author() {
		return Session.get('getPaletteTitle').author
	}
});

Meteor.subscribe('showPalettes');

function getSessionColours() {
		$('.panel-one').css('background-color', '#' + Session.get('getPaletteTitle').c1)
		$('.panel-two').css('background-color', '#' + Session.get('getPaletteTitle').c2)
		$('.panel-three').css('background-color', '#' + Session.get('getPaletteTitle').c3)
		$('.panel-four').css('background-color', '#' + Session.get('getPaletteTitle').c4)
		$('.panel-five').css('background-color', '#' + Session.get('getPaletteTitle').c5)
		$('#menu').css('color', '#' + Session.get('getPaletteTitle').c2)

}

function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function alertInfo(panel, num) {
	var rgb = $(panel).css('background-color')
	//	console.log(rgb)
	//	console.log(rgb2hex(rgb))

		
	sAlert.info('<span class="fa fa-square" style="color:'+rgb2hex(rgb)+'"></span> <br>' + rgb2hex(rgb).toUpperCase() + '<br>' + rgb, {
		effect: 'slide',
		timeout: 'none',
		stack: {spacing: 5, limit: 5},
		postion: 'top',
		html: true,
		offset: 50
	});
}

function rotateMenu(deg) {

	var degrees = [57.2958, 114.592, 171.887, 229.183, 286.479, 343.775, 401.07, 458.366];

	$('#menu').css('-webkit-transform','rotate('+ deg +'deg)');

	
}