import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clearDone(card, cardIndex) {
      let checklist = card.checklist || [];
      let clength = checklist.length;
      
      for(let i = 0; i < clength; i++){
        if (checklist[i].done) {
          checklist.splice(i, 1);
        }
      }
      
      let content = this.get('content');
      content[cardIndex] = card;
    }
    
  }
});