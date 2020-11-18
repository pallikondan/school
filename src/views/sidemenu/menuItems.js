import schoolListIcon from "../../assets/School_list_ic.png";
import newSchoolIcon from "../../assets/register_new_ic.png";
import settingsIcon from "../../assets/setting_ic.png";

export const menuItems = [

    {
        icon:schoolListIcon,
        path:"/listschool",
        name:"School List",
        subText:"List of all Details in the school",
        isAdmin:false
    },
    {
        icon:schoolListIcon,
        path:"/userdetails",
        name:"User Details",
        subText:"List of all Details in the school",
        isAdmin:false

    },
    {
        icon:newSchoolIcon,
        path:"/register",
        name:"Register",
        subText:"Upload all details and bulk upload",
        isAdmin:true
    }


];

export const commonMenuItems = [
    {
    icon:settingsIcon,
    path:"/settings",
    name:"Settings",
    subText:"Other settings",
    isAdmin:false

}
]
