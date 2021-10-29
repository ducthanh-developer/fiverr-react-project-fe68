import Dashboard from "containers/admin/Dashboard/Dashboard";
import withLayout from "hocs/withLayout";
import React from "react";

function AdminLayout(props) {
  return (
    <>

    <div>
        <Dashboard/>
    </div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-10">
            {""}
            <Dashboard />
          </div>
          <div className="col-9 mt-10">{props.children}</div>
        </div>
      </div> */}
    </>
  );
}

export default withLayout(AdminLayout);

