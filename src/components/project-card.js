class projectCard extends HTMLElement {
  constructor() {
    super();
    console.log('I am a project card');
  }
}

customElements.define('project-card', projectCard);
