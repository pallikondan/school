import schoolListIcon from "../../assets/School_list_ic.png";
import newSchoolIcon from "../../assets/register_new_ic.png";
import settingsIcon from "../../assets/setting_ic.png";

export const menuItems = [

    {
        icon:schoolListIcon,
        path:"/listschool",
        name:"School List",
        subText:"List of all Details in the school"
    },
    {
        icon:newSchoolIcon,
        path:"/register",
        name:"Register New School",
        subText:"Upload all details and bulk upload"
    },
    {
        icon:settingsIcon,
        path:"/settings",
        name:"Settings",
        subText:"Other settings"
    }

];