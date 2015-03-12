var app = app || {};

// Like a fancy array for storing a collection of models.
// Uses underscore.js to give us ActiveRecordish methods (like .get)
app.Posts = Backbone.Collection.extend({
  url: '/posts',
  model: app.Post,
  initialize: function () {
    this.on('add', function (post) {
      var postListView = new app.PostListView({model: post});
      postListView.render();
    });
  }
});
