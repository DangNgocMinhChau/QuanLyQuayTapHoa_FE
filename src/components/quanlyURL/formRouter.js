import React, { useState } from "react";
import { Form, Divider, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "antd/lib/form/Form";

import {
  RenderInput,
  RenderTreeSellectInput,
} from "./../../common/renderForm/inputForm";
import { TreeSelect } from "antd";
import { dataTree } from "./../../common/convert/renderConvert";
const { TreeNode } = TreeSelect;
export default function FormRouter({ onSave, cancel }) {
  const [form] = useForm();
  const [value, setValue] = useState(undefined);
  const onChange = () => {
    setValue(value);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 50 },
    },
  };
  const arr = [
    {
      id: 1,
      parentid: 0,
      title: "a",
      children: null,
    },
    {
      id: 2,
      parentid: 1,
      children: null,
      title: "a-1",
    },
    {
      id: 3,
      parentid: 1,
      children: null,
      title: "a-2",
    },
    {
      id: 4,
      parentid: 1,
      children: null,
      title: "a-3",
    },
    {
      id: 4,
      parentid: 1,
      children: null,
      title: "a-3",
    },
    {
      id: 5,
      parentid: 0,
      children: null,
      title: "b",
    },
    {
      id: 6,
      parentid: 5,
      children: null,
      title: "b-1",
    },
    {
      id: 7,
      parentid: 5,
      children: null,
      title: "b-2",
    },
    {
      id: 8,
      parentid: 5,
      children: null,
      title: "b-3",
    },
    {
      id: 9,
      parentid: 5,
      children: null,
      title: "b-4",
    },
  ];

  let unflattenToObject = function (array, parent) {
    var tree = {};
    parent = typeof parent !== "undefined" ? parent : { id: 0 };

    var childrenArray = array.filter(function (child) {
      return child.parentid == parent.id;
    });

    if (childrenArray.length > 0) {
      var childrenObject = {};
      // Transform children into a hash/object keyed on token
      childrenArray.forEach(function (child) {
        childrenObject[child.id] = child;
      });
      if (parent.id == 0) {
        tree = childrenObject;
      } else {
        parent["children"] = childrenObject;
      }
      childrenArray.forEach(function (child) {
        unflattenToObject(array, child);
      });
    }

    return tree;
  };

  let tree = unflattenToObject(arr);
  console.log(tree);
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="basic"
      onFinish={onSave}
      className="test-alight"
    >
      <Divider plain>Cấu hình đường dẫn</Divider>
      <RenderInput name="id" hidden={true} />

      <RenderTreeSellectInput
        name="pid"
        label="Thuộc nhánh"
        style={{ width: "100%" }}
        value={value}
        showLabel={true}
        onChange={onChange}
        dataTree={[]}
      />

      <RenderInput
        label="Tên menu"
        name="title"
        validate={true}
        showLabel={true}
      />

      <RenderInput
        label="Url"
        name="duongDan"
        validate={true}
        showLabel={true}
      />

      <RenderInput name="ngayTaoBanGhi" hidden={true} />
      <Form.Item>
        <div className="row">
          <div className="col-md-12  ">
            <div className="col-md-12 d-flex justify-content-end">
              <Button
                className="ml-2"
                type="primary "
                size="small"
                htmlType="submit"
              >
                Thêm
              </Button>
              <Button
                onClick={() => {
                  cancel();
                }}
                className="ml-2"
                type="seconed"
                size="small"
              >
                Đóng
              </Button>
            </div>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
}
