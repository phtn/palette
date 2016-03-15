Meteor.publish('showPalettes', () => {
	return Palettes.find()
});