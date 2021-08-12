import AppModuleInterface from "../../../common/commom_object_config_auto_create/AppModuleInterface";
import ObjectFormInterface from "../../../common/commom_object_config_auto_create/ObjectFormInterface";
import { TypeControl } from "../../../common/commom_object_config_auto_create/TypeControl.js";

const defineObjectFormProps = (): ObjectFormInterface[] => ([
    // Dinh nghia Form
    {
        dataField: "id",
        text: "ID",
        description: "ID",
        defaultValue: "undefined",
        isShow: false,
        isFilter: true,
        width: 50,
        sort: true,
        render: true,
        renderField: TypeControl.Input,
        hidden: true
    },

    {
        dataField: "ma",
        text: "Mã ",
        description: "Mã ",
        defaultValue: "undefined",
        isShow: true,
        isFilter: false,
        width: 200,
        sort: true,
        renderField: TypeControl.Input,
        hidden: false
    },

    {
        dataField: "ten",
        text: "Tên ",
        description: "Tên ",
        defaultValue: "undefined",
        isShow: true,
        isFilter: false,
        width: 200,
        sort: true,
        renderField: TypeControl.Input,
        hidden: false
    },
])


export const configDanhMucQuanLyCategory = (): AppModuleInterface => ({
    appModuleId: "DANHMUC_QUANLY_CATEGORY",
    // cai chô ni là câấ hinh duong dan tren thanh url a, cho ni dat cai gì cuũn dc
    linkUrl: "/danhmuc/quanlycategory",
    name: "CATEGORY",
    // chỗ ni la cai tên hiêể thị ra dday ne, nen dat cho de hinh dung, lam di e
    description: "CATEGORY",
    defineObjectFormProps: defineObjectFormProps(),
    apiCallServer: "quanlycategory"
})