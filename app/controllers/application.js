import Ember from 'ember';

export default Ember.Controller.extend({
  isShowPopup: false, 
  newCard: null,
  isSaveDisabled: Ember.computed.not('newCard.title'),
  
  actions: {
    togglePopup(card){
      let isShowPopup = this.get('isShowPopup');
      if (isShowPopup) {
        this.send('addCard', card);
        this.set('newCard', null);
      } else {
        this.set('newCard', Ember.Object.create({title:'', description: ''}));
      }
      
      this.toggleProperty('isShowPopup');
    },
    
    addCard(card={}){
      let content = this.get('content');
      
      let title = Ember.get(card, 'title') || '';
      let description = Ember.get(card, 'description') || '';
      
      content.pushObject(
        Ember.Object.create({
        title,
        description,
        checklist: Ember.A([])
      }));
    }
  }
});