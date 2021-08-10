import { arrayFileConfig } from "./../common/commom_object_config_auto_create/ArrayFileConfig";

const renderRouterDanhMuc = () => {
  const listData = [];
  arrayFileConfig.map((item, index) => {
    listData.push({
      name: item.name,
      to: item.linkUrl,
      exact: true,
    });
  });
  return listData;
};

export const menusListQuanTri = [
  {
    name: "Hệ thống",
    type: "Menu",
    children: [
      {
        name: "Quản lý tài khoản",
        children: [
          {
            name: "Tài khoản",
            to: "/quanlytaikhoan",
            exact: true,
          },
        ],
      },
      {
        name: "Quản lý File",
        children: [
          {
            name: "File",
            to: "/files",
            exact: true,
          },
        ],
      },
    ],
  },
  {
    name: "Danh mục",
    to: "/mucluc",
    exact: true,
    children: renderRouterDanhMuc(),
  },
];

export const menusListUser = [
  {
    name: "Hệ thống",
    type: "Menu",
    children: [
      {
        name: "Quản lý kho",
        children: [
          {
            name: "Kho thuốc",
            to: "/khothuoc",
            exact: true,
          },
        ],
      },
      {
        name: "Quản lý nhà cung cấp",
        children: [
          {
            name: "Nhà cung cấp",
            to: "/quanlynhacungcap",
            exact: true,
          },
        ],
      },
      {
        name: "Quản lý thông tin khách hàng",
        children: [
          {
            name: "Thông tin khách hàng",
            to: "/quanlythongtinkhachhang",
            exact: true,
          },
        ],
      },
      {
        name: "Quản lý hoá đơn",
        children: [
          {
            name: "Phiếu bán hàng",
            to: "/quanlyphieubanhang",
            exact: true,
          },
        ],
      },
      {
        name: "Quản lý File",
        children: [
          {
            name: "File",
            to: "/files",
            exact: true,
          },
        ],
      },
    ],
  },
  {
    name: "Tạo phiếu bán hàng",
    to: "/banhang",
    exact: true,
  },

  {
    name: "Báo cáo tổng quát",
    to: "/baocaotongquat",
    exact: true,
  },
  {
    name: "Xem dánh sách",
    to: "/xemdanhsach",
    exact: true,
  },
  {
    name: "Mục lục",
    to: "/mucluc",
    exact: true,
  },
];
