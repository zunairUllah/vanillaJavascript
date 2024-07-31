import Shop from '../components/Shop';
import NotFound from '../components/NotFound';

const routes = {
  '/': Shop,
};

const router = async () => {
  const path = window.location.pathname;
  const routeComponent = routes[path] || NotFound;
  const html = await routeComponent();
  document.querySelector('#app').innerHTML = html; 
};

export const navigateTo = (path) => {
  history.pushState({}, path, window.location.origin + path);
  router();
}

window.navigateTo = navigateTo;  
window.addEventListener('popstate', router);

export default router;
