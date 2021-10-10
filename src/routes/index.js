import About from 'containers/client/About/About';

import Home from 'containers/client/Home/Home';

import Review from 'containers/client/Review/Review';
import Theater from 'containers/client/Theater/Theater';

export const clientRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/theater',
    component: Theater,
    exact: false,
  },
  {
    path: '/review',
    component: Review,
    exact: false,
  },
  {
    path: '/about',
    component: About,
    exact: false,
  },
 
];

export const adminRoutes = [];
