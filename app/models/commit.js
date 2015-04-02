import DS from 'ember-data';

export default DS.Model.extend({
  sha: DS.attr(),
  branch: DS.attr(),
  message: DS.attr(),
  authorName: DS.attr(),
  // author_email: DS.attr(),
  committerName: DS.attr(),
  // committer_email: DS.attr(),
  committedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});