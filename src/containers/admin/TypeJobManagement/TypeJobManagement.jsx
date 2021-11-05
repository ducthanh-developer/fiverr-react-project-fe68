import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Badge } from "antd";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


import { actListTypeJob } from "./modules/action";
// import AddTypeJob from "./Add/AddTypeJob";

export default function TypeJobManagement() {
  // const { Search } = Input;

  const dispatch = useDispatch();
  const { listTypeJob } = useSelector(state => state.typeJobsReducer)
  console.log("listTypeJob", listTypeJob);
  useEffect(() => {
    dispatch(actListTypeJob())
  }, [dispatch]);

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: 'subTypeJobs',
      key: 'subTypeJobs',
      width: 300,
      render: () => (
        <span>
          <Badge status="success" />
          {listTypeJob?.map((mia, index) => {
            return (
              <div>{mia.subTypeJobs?.map((itemJob, index) => {
                return (
                  <div key={index}>{itemJob.name}</div>
                )
              })}</div>
            )

          })}
        </span>
      ),
    },

    {
      title: "Action",
      render: (text, job) => {
        return (
          <Fragment>
            <NavLink to="/" className="mr-3 text-success">
              <EditOutlined />
            </NavLink>
            <NavLink to="/" className="text-danger">
              <DeleteOutlined />
            </NavLink>
          </Fragment>
        );
      },
    },
  ];

  const data = listTypeJob;
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>

      <Link className="nav-link " to="/admin/type-job/add-type-job">
        Thêm
      </Link>
      <Table columns={columns} dataSource={data} onChange={onChange} />

      {/* <AddTypeJob /> */}
    </div>
  )
}
