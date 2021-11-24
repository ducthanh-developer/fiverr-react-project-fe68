import AdminHeader from "components/AdminHeader/AdminHeader";
import AdminSidebar from "components/AdminSideBar/AdminSidebar";
import withLayout from "hocs/withLayout";
import React from "react";
function AdminLayout(props) {
  return (
    <div id="page-top">
      <div id="wrapper">
        {/* Sidebar */}
        <AdminSidebar />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <AdminHeader />
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              {props.children}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2020</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
    </div>
  );
}

export default withLayout(AdminLayout);
