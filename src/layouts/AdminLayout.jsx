import Dashboard from "containers/admin/Dashboard/Dashboard";
import withLayout from "hocs/withLayout";
import React from "react";
import '../layouts/AdminLayout.scss'

function AdminLayout(props) {
  return (
    
      // <span className="">
      //   <div className="row">
      //     <div className="col-2">
      //       <Dashboard />
      //     </div>
      //     <div className="col-9" >{props.children}</div>
      //   </div>
      // </span>
      
      <>
       
        <div className="row">
          <div className="col-3 Dashboard">
          <Dashboard />
          </div>
          <div className="col-9 admin" >{props.children}</div>
        </div>
      </>
    
  );
}

export default withLayout(AdminLayout);

