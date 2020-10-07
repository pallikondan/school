import React, {Fragment,useRef} from "react";
import {Container, Row, Col} from "react-bootstrap";
import SideMenu from "../partials/sideMenu";
import TopNavBar from "../partials/navBar";
import './layout.css';
import AppLogo from "../../assets/logo2.jpg"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const MainLayout = (props) => {
    const menuRef = useRef(null);
    const handleMenu = (e) =>{
    let isMenuOpen = false;
    if(!isMenuOpen){
        menuRef.current.style.display='block'
    }else {
        menuRef.current.style.display='none'

    }
};
    return (
        <Fragment>
            <Container className={'mar_pad_0'} fluid>
                <Row className={'mar_pad_0'}>
                    <Col style={{boxShadow:"10px 0 5px -11px #aaa"}} className={'mar_pad_0'} xs={12} sm={12} xl={3} md={3} lg={3}>
                        <div style={{background: "#35a8fc",textAlign:'center',padding:"10%"}}>
                        <img style={{borderRadius:'50%'}} width="40%" src={AppLogo}  alt={'MiKids'}/>
                        </div>
                        <div style={{background: "#ffffff"}}>
                            <div className="menu-bar">
                                    <div style={{float:'right'}}>
                                        <IconButton onClick={handleMenu} aria-label="menu">
                                            <MenuIcon className={'btn-white'} />
                                        </IconButton>
                                    </div>
                            </div>
                            <div ref={menuRef} className="menu-items">
                                <SideMenu/>
                            </div>
                        </div>
                    </Col>
                    <Col  xs={12} sm={12} xl={9} md={9} lg={9} className={'mar_pad_0'}>
                        <Row className={'mar_pad_0'}>
                            <Col className={'mar_pad_0'}>
                                <TopNavBar/>
                            </Col>
                        </Row>
                        <Row className={'mar_pad_0'}>
                            <Col className={'mar_pad_0'}>
                                <div>
                                    {props.children}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default MainLayout;