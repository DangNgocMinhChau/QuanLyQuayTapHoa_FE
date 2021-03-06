import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ModalQuanLyTaiKhoan from "../../components/quanlytaikhoan/modalQuanLyTaiKhoan";
import TableQuanLyTaiKhoan from "../../components/quanlytaikhoan/tableQuanLyTaiKhoan";
import { Button, Tooltip } from "antd";
import * as act from "../../actions/quanlytaikhoan/actQuanLyTaiKhoan";
import * as actQuanLyThongBao from "../../actions/quanlythongbao/actQuanLyThongBao";
import * as actQuanLyCMND from "../../actions/quanly_cmnd/actQuanLyCMND";
import moment from "moment";
import { thongBao } from "../../common/renderThongBao/renderThongBaoCommon";
import DetailQuanLyTaiKhoan from "../../components/quanlytaikhoan/detailQuanLyTaiKhoan";
import FormRouter from "../../components/quanlyURL/formRouter";

function PageCauHinhRouter({ match, location }) {
  const [openModal, setOpenModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [checkDanhSach, setCheckDanhSach] = useState(true);
  const [checkCMND, setCheckCMND] = useState();
  const [idXoa, setIdXoa] = useState([]);

  const { dataListUser, dataListMessage, dataListCMND, account_current } =
    useSelector(
      (state) => ({
        dataListUser: state.quanlytaikhoan.list,
        dataListMessage: state.quanlythongbao.list,
        dataListCMND: state.quanly_cmnd.list,
        account_current: state.quanlylogin.account_current,
      }),
      shallowEqual
    );

  const dispatch = useDispatch();

  function cancel() {
    setOpenModal(false);
    setShowDetail(false);
    setCheckDanhSach(true);
  }
  var md5 = require("md5");

  function onSave(value) {
    console.log(value);
  }

  const handdelShowDetail = (id) => {
    setShowDetail(true);
    setCheckDanhSach(false);
    dispatch(act.actGetTaiKhoanByIdRequest(id));
  };

  function onEdit(id) {
    dispatch(act.actGetTaiKhoanByIdRequest(id));
    setOpenModal(true);
  }

  function resetForm() {
    dispatch(act.actGetTaiKhoanById(null));
  }

  function openForm() {
    resetForm();
    setOpenModal(true);
  }

  useEffect(() => {
    dispatch(act.actFetchTaiKhoanRequest());
    dispatch(actQuanLyCMND.actFetchAllCMND());
  }, []);

  const onUnlock = (id) => {
    let idMessage = dataListMessage.filter((item) => item.idUser === id)[0]?.id;
    dispatch(act.actGetTaiKhoanByIdUnLockRequest(id));
    dispatch(actQuanLyThongBao.actDelQuanLyThongBaoRequest(idMessage));
  };
  const onLock = (id) => {
    dispatch(act.actGetTaiKhoanByIdLockRequest(id));
  };

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h5 className=" mb-0 text-gray-800">Qu???n l?? URL</h5>
        <div className="row">
          <Button
            size="small"
            className="m-2"
            onClick={() => {
              openForm();
            }}
            type="dashed"
          >
            <i className="fa fa-plus-square" aria-hidden="true"></i>
          </Button>

          <Tooltip placement="bottom" title="Xo?? nhi???u" color="red" key="red">
            <Button
              className="m-2 mr-5 "
              size="small"
              type="dashed"
              danger={true}
            >
              <i
                className="fa fa-trash-o"
                style={{ color: "red" }}
                aria-hidden="true"
              ></i>
            </Button>
          </Tooltip>
        </div>
      </div>

      <div className="row">
        {/* <!-- Area Chart --> */}
        <div className="col-xl-12 col-lg-12">
          <div className="card-custom shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header-custom py-3 d-flex flex-row align-items-center justify-content-between">
              <p className="text-card-header">
                <i
                  className="color-icon-header-danhsach fa fa-book"
                  aria-hidden="true"
                ></i>
                Danh s??ch URL
              </p>
              {showDetail && (
                <div className="row">
                  <a
                    size="small"
                    onClick={() => {
                      cancel();
                    }}
                  >
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  </a>
                </div>
              )}
            </div>
            {/* <ModalQuanLyTaiKhoan
              isVisible={openModal}
              handleCancel={() => cancel()}
              onSave={onSave}
              checkCMND={setCheckCMND}
            />
            {checkDanhSach && (
              <TableQuanLyTaiKhoan
                data={dataListUser}
                match={match}
                onDelete={onDelete}
                onEdit={onEdit}
                onUnlock={onUnlock}
                onLock={onLock}
                setIdXoa={setIdXoa}
                handdelShowDetail={handdelShowDetail}
              />
            )}
            {showDetail && <DetailQuanLyTaiKhoan />} */}
            <FormRouter onSave={onSave} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageCauHinhRouter;
