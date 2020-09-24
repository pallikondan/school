import React,{Component} from 'react';
import {Nav,Row,Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {menuItems} from '../sidemenu/menuItems'


class SideMenu extends Component {
    renderMenuItems = () => {
        return menuItems.map( (menuItem,index) =>
            <NavLink
                key={index}
                style={{padding:"8px 20px",textDecoration:"none",color:"#000000"}}
                to={menuItem.path}
                activeStyle={{
                    padding:" 8px 20px",textDecoration:"none",background:"#f1f1f1",color:"#000000"
                }}>
                {
                    <Row>
                        <Col xs={2} sm={2} xl={2} md={2} lg={2}>
                            <div style={{paddingTop:"5%"}}>
                                {<img src={menuItem.icon} alt={menuItem.name} height={35} />}
                            </div>
                        </Col>
                        <Col>
                            <span>{menuItem.name}</span>
                            <br/>
                            {menuItem.subText ? <span style={{color:"#a3a3a3",fontSize:"12px"}}>{menuItem.subText}</span> : "" }
                        </Col>
                    </Row>
                }
            </NavLink>
        )
    };


    render() {
        return (
            <div style={{padding:"15px 10px"}}>
                <Nav variant="pills" className="flex-column">
                    {this.renderMenuItems()}
                </Nav>
            </div>
        );
    }
}


export default SideMenu;