import Dashboard from "containers/admin/Dashboard/Dashboard";
import DetailJobs from "containers/client/DetailJobs/DetailJobs";
import FiverrDetail from "containers/client/FiverrDetail/FiverrDetail";
import Home from "containers/client/Home/Home";
import ListJobs from "containers/client/ListJobs/ListJobs";
// import ListJobs from "containers/client/ListJobs/ListJobs";
import UserInformation from "containers/client/UserInformation/UserInformation"
import Login from "containers/shared/LoginFiverr/Login";
import Register from "containers/shared/Register/Register";
// import ListJobCategories from "containers/client/ListJobCategories/ListJobCategories";
// import ListJobs from "containers/client/ListJobs/ListJobs";
export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/fiverr",
    component: FiverrDetail,
    exact: true,

  },
 
  {
    path: "/fiverr/:id",
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
