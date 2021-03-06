import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <Fragment>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            Fiverr  
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Interface</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href=".."
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog" />
            <span>User Management</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <NavLink className="collapse-item" to="/admin">
                List User
              </NavLink>
              <NavLink className="collapse-item" to="/admin/user-managerment/add">
                Add User
              </NavLink>

            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href=".."
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench" />
            <span>Job Management</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <NavLink className="collapse-item" to="/admin/job-management">
                List job
              </NavLink>
              <NavLink className="collapse-item" to="/admin/type-job">
                list Type Job
              </NavLink>
              <NavLink className="collapse-item" to="/admin/subjob-management">
                List  Sub Type Job
              </NavLink>
              <NavLink className="collapse-item" to="/admin/job-management/add-job">
                add job
              </NavLink>
              <NavLink className="collapse-item" to="/admin/type-job/add">
                add Type Job
              </NavLink>
              <NavLink className="collapse-item" to="/admin/subjob-management/add-subjo">
                add Sub Type Job
              </NavLink>
            </div>
          </div>
        </li>
        {/* 
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href=".."
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench" />
            <span>Job Type Management</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <NavLink className="collapse-item" to="/admin/type-job">
              list Type Job
              </NavLink>
              <NavLink className="collapse-item" to="/admin/type-job/add">
                add Type Job
              </NavLink>
            </div>
          </div>
        </li> */}
        {/* Divider */}
        {/* <hr className="sidebar-divider" /> */}
        {/* Heading */}
        {/* <div className="sidebar-heading">Addons</div> */}
        {/* Nav Item - Pages Collapse Menu */}
        {/* <li className="nav-item active"> */}
        {/* <a
            className="nav-link"
            href=".."
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Sub Job Management</span>
          </a>
          <div
            id="collapsePages"
            className="collapse show"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <NavLink className="collapse-item" to="/admin/subjob-management">
              Sub Type Job
              </NavLink>
              <NavLink className="collapse-item" to="/admin/subjob-management/add-subjo">
                add Sub Type Job
              </NavLink>
              
            </div>
          </div>
        </li> */}
        {/* Nav Item - Charts */}
        {/* <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li> */}
        {/* Nav Item - Tables */}
        {/* <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </a>
        </li> */}
        {/* Divider */}
        {/* <hr className="sidebar-divider d-none d-md-block" /> */}
        {/* Sidebar Toggler (Sidebar) */}
        {/* <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div> */}
      </ul>
    </Fragment>
  );
}
