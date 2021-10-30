import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Link, NavLink } from "react-router-dom";
import { Table } from 'antd';
import { actDeleteUser, actListUserAdmin } from "./module/action";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

export default function UserManagerment() {
  const dispatch = useDispatch();
  const { userList } = useSelector(state => state.listUserReducer)
  console.log("userList", userList);
  useEffect(() => {
    dispatch(actListUserAdmin())

  }, [dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
      width: 150,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      width: 180,
      sorter: {
        compare: (a, b) => a.emai - b.emai,
        multiple: 1,
      },
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      key: 'birthday ',
      ellipsis: true,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
      ellipsis: true,
      width: 150,
    },
    {
      title: 'skill',
      dataIndex: 'skill',
      key: 'skill',
      ellipsis: true,
    },
    {
      title: 'Long Column',
      dataIndex: 'address',
      key: 'address 4',
      ellipsis: true,
    },
    {
      title: "hành động",
      dataIndex: "hành động",
      multiple: 3,

      //<EditOutlined />
      render: (index, user) => {
        return <Fragment>
          <NavLink className="bg-dark text-white hhhhh" to={`/Admin/MovieManager/EditMovie/${user._id}`} >
            <i className="btn-xoa-sua-showtime">
              <EditOutlined />
            </i>
          </NavLink>
          <span width={200} onClick className=" bg-dark ml-2" to=""key={index}
            onClick={() => {
              if (window.confirm('Are you sure you want to delete' + user._id)) {
                dispatch(actDeleteUser(user._id));
              }
            }} >
            <i className="btn-xoa-sua-showtime">
              <DeleteOutlined />
            </i>
          </span>
          <NavLink className="bg-dark text-white" to={`/Admin/MovieManager/ShowTime/${user._id}`} >
            <i className="btn-xoa-sua-showtime">
              <CalendarOutlined />
            </i>
          </NavLink>
        </Fragment>
      },
    },
  ];

  const data = userList;
  return (
    <div>
      <Link className="nav-link searchText" to="/Admin/MovieManager/AddMovie">
        Thêm Phim
      </Link>

      <Table columns={columns} dataSource={data} />
    </div>
  )
}
