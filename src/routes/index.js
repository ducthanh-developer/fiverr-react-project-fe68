import About from 'containers/client/About/About';
import Home from 'containers/client/Home/Home';
import Review from 'containers/client/Review/Review';
import Theater from 'containers/client/Theater/Theater';
import FiverrDetail from 'containers/client/FiverrDetail/FiverrDetail';
export const clientRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/1',
    component: FiverrDetail,
    exact: false,
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
