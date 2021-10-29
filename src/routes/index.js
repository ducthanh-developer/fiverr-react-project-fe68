import DetailJobs from "containers/client/DetailJobs/DetailJobs";
import Home from "containers/client/Home/Home";
import ListJobCategories from "containers/client/ListJobCategories/ListJobCategories";
import ListJobs from "containers/client/ListJobs/ListJobs";
export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/list-jobs/:typeId",
    component: ListJobs,
    exact: true,
  },
  {
    path: "/fiverr/:id",
    component: DetailJobs,
    exact: false,
  },
  {
    path: "/job-categories",
    component: ListJobCategories,
    exact: true,
  },
];

export const adminRoutes = [];
