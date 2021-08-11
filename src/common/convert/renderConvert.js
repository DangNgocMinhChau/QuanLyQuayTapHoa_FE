import moment from "moment";
import { Menu, TreeSelect } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const { SubMenu } = Menu;
const { TreeNode } = TreeSelect;

export const renderTien = (value) => {
  if (value) {
    return (
      <span>
        {` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + "vnđ"}
      </span>
    );
  }
};

export const renderDate = (value) => {
  if (value) {
    return <>{moment(value).format("DD/MM/YYYY")}</>;
  }
};

export const renderDateTime = (value) => {
  if (value) {
    return <>{moment(value).format("DD/MM/YYYY HH:mm:ss")}</>;
  }
};

export const renderConverLoaiThanhToan = (value) => {
  if (value === "CongNo") {
    return <span>Công nợ</span>;
  } else if (value === "TienMat") {
    return <span>Tiền mặt</span>;
  }
};
export const renderConvertSoLuongTheoDonVi = (value, donViTinh) => {
  if (donViTinh == "Hop") {
    return <span>{value}/Hộp</span>;
  } else if (donViTinh == "Vien") {
    return <span>{value}/Viên</span>;
  } else if (donViTinh == "Tuyp") {
    return <span>{value}/Tuýp</span>;
  }
};

export const renderConvertSoLuongTheoDonViReturnString = (value, donViTinh) => {
  let string = "";
  if (donViTinh == "Hop") {
    return (string = `${value}/Hộp`);
  } else if (donViTinh == "Vien") {
    return (string = `${value}/Viên`);
  } else if (donViTinh == "Tuyp") {
    return (string = `${value}/Tuýp`);
  }
};

export const renderDateTheoHeThong = () => {
  return moment().format("DD/MM/yyyy HH:mm:ss ");
};

// Build du lieu dang tree
export function renderTreeData(dataTree, parentKey = 0) {
  return dataTree.map((item, index) =>
    Array.isArray(item.children) && item.children.length > 0 ? (
      <TreeNode
        key={`${parentKey}-${index}`}
        value={item.id}
        title={item.title}
      >
        {renderTreeData(item.children, `${parentKey}-${index}`)}
      </TreeNode>
    ) : (
      <TreeNode
        key={`${parentKey}-${index}`}
        value={item.id}
        title={item.title}
      />
    )
  );
}

export function renderRouter(dataMenu, parentKey = 0) {
  return dataMenu.map((item, index) =>
    Array.isArray(item.children) && item.children.length > 0 ? (
      <SubMenu key={`${parentKey}-${index}`} title={item.name}>
        {renderRouter(item.children, `${parentKey}-${index}`)}
      </SubMenu>
    ) : (
      <Menu.Item key={`${parentKey}-${index}`}>
        <Link key={index} className="nav-link" to={item.to} exact={item.exact}>
          <span>
            {" "}
            <i className="icon-menu-custom fa fa-circle"></i>
            {item.name}
          </span>
        </Link>
      </Menu.Item>
    )
  );
}
