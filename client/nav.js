Template.nav.rendered = function() {
	new Vue({
		el: '#navbar',
		data: {
			counter: 0
		},
		methods: {
			increment() {
				this.counter += 1
			}
		}
	});

	Session.setDefault('category', 'top');
}

// EVENTS
Template.nav.events({
	'click #menu-btn'() {
		$('#menu').fadeTo(100, .1)
		$('#menu').fadeTo(100, 1)
	},
	'click #top'() {
		Session.setPersistent('category', 'top')
	},
	'click #rand'() {
		Session.setPersistent('category', 'random')
	}
});

// HELPERS
Template.nav.helpers({
	category() {
		return Session.get('category')
	}
});
