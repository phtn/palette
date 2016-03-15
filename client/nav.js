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