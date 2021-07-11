const routes = {
    '/login': { templateId: 'login' },
    '/dashboard': { templateId: 'dashboard' },
  }; // object to implement a map between URL paths and the templates.

function updateRoute(templateId) {
    const template = document.getElementById(templateId); // instantiate the template
    const view = template.content.cloneNode(true); // here is the cloned content within the app placeholder
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view); // appendChild
  }
   updateRoute('login');

  function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];
  
    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
  }

  function navigate(path) {
    window.history.pushState({}, path, path);
    updateRoute();
  }
  
  function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];
  
    if (!route) {
      return navigate('/login');
    }
  
    function onLinkClick(event) {
        event.preventDefault();
        navigate(event.target.href);
      } // get url, when a link is clicked,& prevent the browser's default link behavior
      
      <a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>

    window.onpopstate = () => updateRoute();
    updateRoute();

  