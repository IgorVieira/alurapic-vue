import Vue from 'vue';

Vue.directive('meu-rotate', {
  
    bind(el, binding, vnode) {
      
      let current = 0;

      el.addEventListener('dblclick', function() {

        let graus = binding.value || 90;

        current+=graus;
        this.style.transform = `rotate(${current}deg)`;
        if (binding.modifiers.animate) this.style.transition = "transform 0.5s";
        
      });
    }

});