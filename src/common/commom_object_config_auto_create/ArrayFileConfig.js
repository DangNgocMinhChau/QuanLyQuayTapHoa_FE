import { configDanhMucPhanQuyenUser } from "../../pages/autoCreateDanhMuc/config/configDanhMucPhanQuyenUser.ts";
import { configDanhMucQuanLyCMND } from "../../pages/autoCreateDanhMuc/config/configDanhMucQuanLyCMND"
import { configDanhMucQuanLyCategory } from "../../pages/autoCreateDanhMuc/config/configDanhMucQuanLyCategory";

export const arrayFileConfig = [
  configDanhMucPhanQuyenUser(),
  configDanhMucQuanLyCMND(),
  configDanhMucQuanLyCategory()
];
