import AppModuleInterface from "../../../common/commom_object_config_auto_create/AppModuleInterface";
import ObjectFormInterface from "../../../common/commom_object_config_auto_create/ObjectFormInterface";
import {TypeControl} from "../../../common/commom_object_config_auto_create/TypeControl.js";

const defineObjectFormProps = () : ObjectFormInterface [] => ([
    // Dinh nghia Form
    {
        dataField : "id",
        text: "ID",
        description: "ID",
        defaultValue: "undefined",
        isShow:false,
        isFilter:true,
        width: 50,
        sort:true,
        render:true,
        renderField:TypeControl.Input,
        hidden:true
    },

    {
        dataField : "EMAIL",
        text: "Email",
        description: "Email",
        defaultValue: "undefined",
        isShow:true,
        isFilter:false,
        width: 200,
        sort:true,
        renderField: TypeControl.Input,
        hidden:false
    },
   
    {
        dataField : "ADDRESS",
        text: "Địa chỉ",
        description: "Địa chỉ",
        defaultValue: "undefined",
        isShow:true,
        isFilter:false,
        width: 200,
        sort:true,
        renderField: TypeControl.Input,
        hidden:false
    },

    {
        dataField : "soDIENTHOAI",
        text: "Phone",
        description: "Phone",
        defaultValue: "undefined",
        isShow:true,
        isFilter:false,
        width: 200,
        sort:true,
        renderField: TypeControl.Input,
        hidden:false
    },
    
    {
        dataField : "soCMND",
        text: "Số CMND",
        description: "Sô CMND",
        defaultValue: "undefined",
        isShow:true,
        isFilter:false,
        width: 200,
        sort:true,
        renderField: TypeControl.Input,
        hidden:false
    },

    {
        dataField : "tenKH",
        text: "Tên",
        description: "Tên",
        defaultValue: "undefined",
        isShow:true,
        isFilter:false,
        width: 200,
        sort:true,
        renderField: TypeControl.Input,
        hidden:false
    },
])


export const configDanhMucQuanLyKH = (): AppModuleInterface => ({
    appModuleId: "DANHMUC_QUANLY_KHACH_HANG",
    linkUrl:"/danhmuc/quanlykhachhang",
    name:"CUSTOMER",
    description:"CUSTOMER",
    defineObjectFormProps: defineObjectFormProps(),
    // Cho ni e lên coi thủ no la cai gi ben link API
    apiCallServer:"quanlykhachhang"
})