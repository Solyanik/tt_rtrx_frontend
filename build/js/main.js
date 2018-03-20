window.onload = function () {

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  var app = new Vue({
    el:'#app',
    data: {
      isMenuMobileTrue: false,
      isDiagramTypeSelectTrue: false,
      diagramTypeList: [
        { id: 0, text: 'Pie' },
        { id: 1, text: 'Bar' },
        { id: 2, text: 'Line' }
      ]
    },
    methods: {
      menuMobile: function () {
        this.isMenuMobileTrue = (this.isMenuMobileTrue ? false : true);
      },
      DiagramTypeSelect: function () {
        this.isDiagramTypeSelectTrue = (this.isDiagramTypeSelectTrue ? false : true);
      }
    }
  })

}