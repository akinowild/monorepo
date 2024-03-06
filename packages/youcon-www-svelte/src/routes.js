
import Home from './pages/index.svelte';
import News from './pages/news/index.svelte';
import Smarter from './pages/smarter/index.svelte';
import Scenarios from './pages/scenarios/index.svelte';
import Company from './pages/company/index.svelte';
import Detail from './pages/news/detail.svelte';


const routes = {
  '/': Home,
  '/smarter': Smarter,
  '/company': Company,
  '/scenarios': Scenarios,
  '/news': News,
  '/news/id/*': Detail,
  // '/detail/:type/:id': Detail,
}

export default routes;