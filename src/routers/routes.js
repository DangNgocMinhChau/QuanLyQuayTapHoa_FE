import React from "react";
import Home from "../components/Home";
import NotFound from "../pages/HomePage/404";
import PageQuanLyTaiKhoan from "../pages/quanlytaikhoan/pageQuanLyTaiKhoan";
import Login from "../pages/users/login";

import PageQuanLyFiles from "../pages/quanlyfile/pageQuanLyFiles";

import { arrayFileConfig } from "../common/commom_object_config_auto_create/ArrayFileConfig";
import PageConfigCRUD from "../pages/autoCreateDanhMuc/pageConfigCRUD/pageConfigCRUD";
import PageCauHinhRouter from "../pages/quanlyurl/pageCauHinhRouter";

const renderRouterConfig = () => {
  const dataPath = [];
  arrayFileConfig.map((itemConfig, indexConfig) => {
    dataPath.push({
      path: itemConfig.linkUrl,
      exact: true,
      main: ({ match, location }) => (
        <PageConfigCRUD
          location={location}
          match={match}
          propsDefineObject={itemConfig}
        />
      ),
    });
  });
  return dataPath;
};
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/quanlytaikhoan",
    exact: true,
    main: ({ match, location }) => (
      <PageQuanLyTaiKhoan location={location} match={match} />
    ),
  },
  {
    path: "/login",
    exact: true,
    main: ({ match, location }) => <Login match={match} location={location} />,
  },
  {
    path: "/createrouter",
    exact: true,
    main: ({ match, location }) => <PageCauHinhRouter match={match} location={location} />,
  },

  {
    path: "/files",
    exact: true,
    main: ({ match, location }) => (
      <PageQuanLyFiles location={location} match={match} />
    ),
  },
  renderRouterConfig(),
  {
    path: "",
    exact: true,
    main: () => <NotFound />,
  },
];

// Chỗ build router tư dong
let dataRouter = [];
routes.map((itemMenu, indexMenu) => {
  if (Array.isArray(itemMenu) && itemMenu.length > 0) {
    itemMenu.map((itemRouterConfig, indexRouterConfig) => {
      dataRouter.push(itemRouterConfig);
    });
  } else {
    dataRouter.push(itemMenu);
  }
});

export default dataRouter;
