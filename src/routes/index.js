import Dashboard from "containers/admin/Dashboard/Dashboard";
import DetailJobs from "containers/client/DetailJobs/DetailJobs";
import Home from "containers/client/Home/Home";
import ListJobCategories from "containers/client/ListJobCategories/ListJobCategories";
import ListJobs from "containers/client/ListJobs/ListJobs";
import UserInformation from "containers/client/UserInformation/UserInformation";
import Login from "containers/shared/LoginFiverr/Login";
import Register from "containers/shared/Register/Register";
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
    path: "/list-jobs",
    component: ListJobs,
    exact: true,
  },
  {
    path: "/list-job-categories/:typeId",
    component: ListJobCategories,
    exact: true,
  },
  {
    path: "/list-jobs/:id",
    component: DetailJobs,
    exact: false,
  },
  {
    path: "/login/:id",
    component: UserInformation,
    exact: false,
  },
  {
    path: "/login",
    component: Login,
    exact: false,
  },
  {
    path: "/register",
    component: Register,
    exact: false,
  },
  {
    path: "/list-jobs",
    component: ListJobs,
    exact: false,
  },
];

export const adminRoutes = [
  {
    path: "/admin",
    component: Dashboard,
    exact: false,
  },
];
