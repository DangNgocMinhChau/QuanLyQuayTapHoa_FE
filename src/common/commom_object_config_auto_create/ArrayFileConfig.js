import { configDanhMucPhanQuyenUser } from "../../pages/autoCreateDanhMuc/config/configDanhMucPhanQuyenUser.ts";
import { configDanhMucQuanLyCMND } from "../../pages/autoCreateDanhMuc/config/configDanhMucQuanLyCMND"
import { configDanhMucQuanLyCategory } from "../../pages/autoCreateDanhMuc/config/configDanhMucQuanLyCategory";
import { configDanhMucQuanLyKH } from "../../pages/autoCreateDanhMuc/config/configDanhMucQuanLyKH";

export const arrayFileConfig = [
  configDanhMucPhanQuyenUser(),
  configDanhMucQuanLyCMND(),
  configDanhMucQuanLyCategory(),
  configDanhMucQuanLyKH(),
];
