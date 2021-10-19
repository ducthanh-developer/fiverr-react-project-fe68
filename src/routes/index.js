import DetailJobs from "containers/client/DetailJobs/DetailJobs";
import FiverrDetail from "containers/client/FiverrDetail/FiverrDetail";
import Home from "containers/client/Home/Home";
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
  // {
  //   path: "/list-jobs",
  //   component: ListJobs,
  //   exact: true,
  // },
  {
    path: "/fiverr/:id",
    component: DetailJobs,
    exact: false,
  },

  // {
  //   path: "/job-categories",
  //   component: ListJobCategories,
  //   exact: true,
  // },
];

export const adminRoutes = [];
