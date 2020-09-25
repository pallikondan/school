import React, {Fragment} from "react";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

const TopNavBar = (props) => {
    return (
        <Fragment>
            <div style={{height: "5vh", display: "flex", flexDirection: "row-reverse"}}>
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
                            <span className={'font-gray font-small'}>{'Sachin kumar'}</span>
                        </IconButton>
                    </li>
                    <li style={{display: "inline",borderLeft:"1px solid gray", borderRight:"1px solid gray",borderCollapse:"collapse"}}>
                        <IconButton aria-label="delete">
                            <PowerSettingsNewOutlinedIcon />
                        </IconButton>
                    </li>
                </ul>
            </div>
        </Fragment>

    )
}


export default TopNavBar




