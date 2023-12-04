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


        // this.textContent = includeContent; // Set the content of the element to the value of the include attribute
      }
    }
  
    static get observedAttributes() {
      return ['include'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'include') {
        
        fetch('./assets/component/'+includeContent+'.html')
        .then(response => response.text())
        .then(html => {
            this.innerHTML = html
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        }); // Set the content of the element to the value of the include attribute

      }
    }
  
    get include() {
      return this.getAttribute('include');
    }
  
    set include(value) {
      this.setAttribute('include', value);
    }
  }
  
  customElements.define('component-element', ComponentElement);
  