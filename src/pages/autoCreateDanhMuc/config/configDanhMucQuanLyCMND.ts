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
])


export const configDanhMucQuanLyCMND = (): AppModuleInterface => ({
    appModuleId: "DANHMUC_QUANLY_CMND",
    linkUrl:"/danhmuc/quanlycmnd",
    name:"CMND",
    description:"CMND",
    defineObjectFormProps: defineObjectFormProps(),
    // Cho ni e lên coi thủ no la cai gi ben link API
    apiCallServer:"quanlycmnd"
})