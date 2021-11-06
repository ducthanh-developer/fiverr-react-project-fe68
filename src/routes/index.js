import AddJob from "containers/admin/JobManagement/AddJob/AddJob";
import JobManagement from "containers/admin/JobManagement/JobManagement";
import AddUser from "containers/admin/UserManagement/AddUser/AddUser";
import EditUser from "containers/admin/UserManagement/EditUser/EditUser";
import UserManagerment from "containers/admin/UserManagement/UserManagerment";
import DetailJobs from "containers/client/DetailJobs/DetailJobs";
import Home from "containers/client/Home/Home";
import ListJobCategories from "containers/client/ListJobCategories/ListJobCategories";
import ListJobs from "containers/client/ListJobs/ListJobs";
import UserInformation from "containers/client/UserInformation/UserInformation";
import Login from "containers/shared/LoginFiverr/Login";
import Register from "containers/shared/Register/Register";
import TypeJobManagement from "containers/admin/TypeJobManagement/TypeJobManagement";
import AddTypeJob from "containers/admin/TypeJobManagement/Add/AddTypeJob";
import EditTypeJob from "containers/admin/TypeJobManagement/Edit/EditTypeJob";
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
    path: "/detail-jobs/:jobId",
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
];

export const adminRoutes = [
  {
    path: "/admin",
    component: UserManagerment,
    exact: true,
  },
  {
    path: "/admin/job-management",
    component: JobManagement,
    exact: true,
  },
  {
    path: "/admin/job-management/add-job",
    component: AddJob,
    exact: true,
  },
  {
    path: "/admin/user-managerment/add",
    component: AddUser,
    exact: false,
  },
  {
    path: "/admin/user-managerment/edit/:idUser",
    component: EditUser,
    exact: false,
  },
  {
    path: "/admin/type-job",
    component: TypeJobManagement,
    exact: true,
  },
  {
    path: "/admin/type-job/add",
    component: AddTypeJob,
    exact: false,
  },
  {
    path: "/admin/type-job/edit/:typeId",
    component: EditTypeJob,
    exact: false,
  },
  
  
];
