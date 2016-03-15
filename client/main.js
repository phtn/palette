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

			printColor() {
				var bgcolor = '#' + '1ca8dd';
				document.getElementById('p1').style.backgroundColor=bgcolor;
				console.log($('#p1').css('background-color'));
				var color = $('#p1').css('background-color');
				//console.log(rgb2hex(color))
				this.counter += 1;

				console.log(Palettes.find().count());
				console.log(bgcolor)

			}
		}
	});



}

// EVENTS
Template.main.events({
	'click button': () => {
		


		Meteor.call('getPalettes', (err, res) => {
			Session.setPersistent('getPaletteTitle', res)
		});
		
		
		getSessionColours()

		
		

	},

	'click .panel-one' () {
		rgb = $('.panel-one').css('background-color')
		console.log(rgb)
		console.log(rgb2hex(rgb))
		
		sAlert.info(rgb2hex(rgb).toUpperCase() + '<br>' + rgb, {
			effect: 'slide',
			timeout: 'none',
			stack: false,
			postion: 'top-right',
			html: true
		})

	},

	'click .panel-two' () {
		console.log($('.panel-two').css('background-color'))
	},

	'click .panel-three' () {
		console.log($('.panel-three').css('background-color'))
	},

	'click .panel-four' () {
		console.log($('.panel-four').css('background-color'))
	},

	'click .panel-five' () {
		console.log($('.panel-five').css('background-color'))
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
}

function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}