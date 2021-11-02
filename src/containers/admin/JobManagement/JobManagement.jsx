import React, { useEffect } from "react";
import { Table, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd/lib/radio";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListJobs } from "containers/client/ListJobs/module/actions";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
export default function JobManagement() {
  const { listJobs } = useSelector((state) => state.JobReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListJobs());
  }, [dispatch]);

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      sorter: (a, b) => a._id - b._id,
    },
    {
      title: "Name Job",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
          children: [
            {
              text: "Yellow",
              value: "Yellow",
            },
            {
              text: "Pink",
              value: "Pink",
            },
          ],
        },
        {
          text: "Category 2",
          value: "Category 2",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name - b.name,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Rate",
      dataIndex: "rating",
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: "Price",
      dataIndex: "price",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
    },
    {
      title: "Type",
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

  const data = listJobs;

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <h3>List Jobs</h3>
      <Button className="mb-3">Add Job</Button>
      <Search
        className="mb-3"
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
