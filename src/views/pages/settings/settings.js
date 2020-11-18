import React from "react";
import TopBreadCrumb from "../../partials/breadcrumb";
import settinsIcon from "../../../assets/setting_ic.png";

const Settings = (props) => {


    return (
        <>
            <TopBreadCrumb name={"Settings"} icon={settinsIcon} isSearch={false} bread={props}/>
        </>

    )
}


export default Settings
