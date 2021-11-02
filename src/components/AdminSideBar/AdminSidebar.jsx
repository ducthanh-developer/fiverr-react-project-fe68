import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Management</li>
            <li>
              <a>
                <i className="metismenu-icon pe-7s-diamond" />
                Users
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <NavLink to="/admin/user-managerment/add">
                    <i className="metismenu-icon" />
                    AddUser
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <i className="metismenu-icon pe-7s-car" />
                Jobs
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <NavLink to="/admin/job-management">
                    <i className="metismenu-icon"></i>List Jobs
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="tables-regular.html">
                <i className="metismenu-icon pe-7s-display2" />
                Tables
              </a>
            </li>
            <li className="app-sidebar__heading">Widgets</li>
            <li>
              <a href="dashboard-boxes.html">
                <i className="metismenu-icon pe-7s-display2" />
                Dashboard Boxes
              </a>
            </li>
            <li className="app-sidebar__heading">Forms</li>
            <li>
              <a href="forms-controls.html">
                <i className="metismenu-icon pe-7s-mouse"></i>Forms Controls
              </a>
            </li>
            <li>
              <a href="forms-layouts.html">
                <i className="metismenu-icon pe-7s-eyedropper"></i>Forms Layouts
              </a>
            </li>
            <li>
              <a href="forms-validation.html">
                <i className="metismenu-icon pe-7s-pendrive"></i>Forms
                Validation
              </a>
            </li>
            <li className="app-sidebar__heading">Charts</li>
            <li>
              <a href="charts-chartjs.html">
                <i className="metismenu-icon pe-7s-graph2"></i>ChartJS
              </a>
            </li>
            <li className="app-sidebar__heading">PRO Version</li>
            <li>
              <a href="..." target="_blank">
                <i className="metismenu-icon pe-7s-graph2"></i>
                Upgrade to PRO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
