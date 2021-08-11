import React from "react";
import { Menu } from "antd";
import * as dataMenu from "./../../routers/dataMenu";
import {renderRouter} from "./../../common/convert/renderConvert"

function MenuLeft({ checkToogle, colorMenu, account_current }) {
  return (
    <>
      {checkToogle && (
        <Menu
          style={{
            width: 256,
            color: "Highlight",
          }}
          theme={`${colorMenu ? "dark" : "light "}`}
          mode="inline"
          collapsedWidth="100%"
        >
          {/* {account_current.maQuyen === "ADMIN"
            ? renderRouter(dataMenu.menusListQuanTri)
            : renderRouter(dataMenu.menusListUser)} */}
          {renderRouter(dataMenu.menusListQuanTri)}
        </Menu>
      )}
    </>
  );
}

export default MenuLeft;
