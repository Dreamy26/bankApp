function updateRoute(templateId) {
    const template = document.getElementById(templateId); // instantiate the template
    const view = template.content.cloneNode(true); // here is the cloned content within the app placeholder
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view); // appendChild
  }
  