import FiverrDetail from 'containers/client/FiverrDetail/FiverrDetail';
import Home from 'containers/client/Home/Home';
export const clientRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/fiverr',
    component: FiverrDetail,
    exact: false,
  },
 
];

export const adminRoutes = [];
