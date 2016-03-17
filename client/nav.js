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
	})
}

// EVENTS
Template.nav.events({
	'click #menu-btn'() {
		$('#menu').fadeTo(100, .1)
		$('#menu').fadeTo(100, 1)
	}
})