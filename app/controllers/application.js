import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCard(){
      let content = this.get('content');
      content.pushObject(
        Ember.Object.create({
        title: '',
        description: '',
        checklist: []
      }));
    }
  }
});