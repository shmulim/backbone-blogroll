// Backbone Model
var Blog = Backbone.Model.extend({
	defaults: {
		'name': '',
		'title': '',
		'url': ''
	}
});

// Backbone Collection
var Blogs = Backbone.Collection.extend({});

// Create 2 Blog model instances
var blog1 = new Blog({
	'name': 'shmuli',
	'title': 'title here',
	'url': 'url here'
});

var blog2 = new Blog({
	'name': 'shmulim',
	'title': 'second title',
	'url': 'second url here'
});

// Create a Blogs collection instance
var blogs = new Blogs([blog1, blog2]);