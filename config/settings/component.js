class ComponentElement extends HTMLElement {
    constructor() {
      super();
      const includeContent = this.getAttribute('include');
      if (includeContent) {
        
        fetch('./assets/component/'+includeContent+'.html')
        .then(response => response.text())
        .then(html => {
            this.innerHTML = html
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });

      }
    }
  
    static get observedAttributes() {
      return ['include'];
    }
   
    get include() {
      return this.getAttribute('include');
    }
  
    set include(value) {
      this.setAttribute('include', value);
    }
  }
  
  customElements.define('component-element', ComponentElement);
  