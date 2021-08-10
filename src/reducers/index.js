import { combineReducers } from "redux";
import quanlytaikhoan from "./quanlytaikhoan";
import quanlylogin from "./quanlylogin";
import quanlythongbao from "./quanlythongbao";
import quanly_cmnd from "./quanly_cmnd";
import quanly_files from "./quanlyfiles";
import config_crud_auto from "./config_crud_auto";
import danhmuc from "./danhmuc";

const appReducers = combineReducers({
  quanlytaikhoan,
  quanlylogin,
  quanlythongbao,
  quanly_cmnd,
  quanly_files,
  config_crud_auto,
  danhmuc,
});

export default appReducers;
