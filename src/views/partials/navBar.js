import React, {Fragment} from "react";


const TopNavBar = (props) => {
    return (
        <Fragment>
            <div style={{height: "5vh", padding: "10px", display: "flex", flexDirection: "row-reverse"}}>
                <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
                    <li style={{display: "inline", padding: "0 20px",borderLeft:"1px solid gray", borderRight:"1px solid gray",borderCollapse:"collapse"}}>noti</li>
                    <li style={{display: "inline", padding: "0 20px",borderLeft:"1px solid gray", borderRight:"1px solid gray",borderCollapse:"collapse"}}>profile</li>
                    <li style={{display: "inline", padding: "0 20px",borderLeft:"1px solid gray", borderRight:"1px solid gray",borderCollapse:"collapse"}}>logout</li>
                </ul>
            </div>
        </Fragment>

    )
}


export default TopNavBar




