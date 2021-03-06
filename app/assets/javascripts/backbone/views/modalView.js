App.Views.Modal = Backbone.View.extend({
	el: '#modal',
	initialize: function() {
		console.log('modal created');
		this.template = HandlebarsTemplates['modal'];
		// this.listenTo(this.model, '')
	},
	setRecipe: function(recipe) {
		this.model = recipe;
		this.render();
	},
	show: function() {
		this.$el.fadeIn(500);
	},
	events: {
		'click .close-modal': 'hide'
	},
	hide: function() {
		this.$el.empty();
		this.$el.fadeOut(100);
	},
	render: function() {
		var usefulObject = {
			myIframe: this.myIframe
		};
		this.$el.html(this.template(usefulObject));
	}, 
	setUrl: function(iframeurl) {
		this.myIframe = iframeurl;
	}
})