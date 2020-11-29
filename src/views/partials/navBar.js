import React, {Fragment} from "react";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import { useHistory } from "react-router-dom";
import {removeAuthToken} from "../../utils/Auth";
import {connect} from "react-redux";

const logout = (history) =>{
    removeAuthToken();
    localStorage.removeItem('UserType');
    history.push("login");

};
const TopNavBar = (props) => {
    let history = useHistory();

    return (
        <Fragment>
            <div style={{display: "flex", flexDirection: "row-reverse"}}>
                <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
                    <li style={{display: "inline",borderLeft:"1px solid gray", borderRight:"1px solid gray",borderCollapse:"collapse"}}>
                        <IconButton aria-label="delete">
                            <Badge variant="dot" invisible={false} overlap="circle" color="primary">
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </li>
                    <li style={{display: "inline",borderLeft:"1px solid gray", borderRight:"1px solid gray",borderCollapse:"collapse"}}>
                        <IconButton aria-label="delete">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </li>
                    <li style={{display: "inline",borderLeft:"1px solid gray", borderRight:"1px solid gray",borderCollapse:"collapse"}}>
                        <IconButton onClick={()=>logout(history)} aria-label="delete">
                            <PowerSettingsNewOutlinedIcon />
                        </IconButton>
                    </li>
                </ul>
            </div>
        </Fragment>

    )
}

const mapStateToProps = (state) =>{

    return {
        profile:state.Login.profile
    }
}

export default connect(mapStateToProps)(TopNavBar)




