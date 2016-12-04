import Ember from 'ember';

export default Ember.Controller.extend({
   session: Ember.inject.service('session'),

   isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    invalidateSession(){
        this.get('session').invalidate();
    }
  }
});
