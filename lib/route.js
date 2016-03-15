FlowRouter.route('/', {
	name: 'Home',
	action(params) {
		BlazeLayout.render('layout', {top:'nav', main: 'main'})
		console.log('/')
	}
});