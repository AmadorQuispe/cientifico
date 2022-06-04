import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import resolveRoutes from '../utils/resolveRoutes';
import getHash from '../utils/getHash';


const routes = {
    '/'    : Home,
    '/:id' : Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    header.innerHTML = Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render =  routes[route] ? routes[route] : Error404;
    content.innerHTML =  await render();
}

export default router;