import React, {Fragment} from "react";
import {Container, Row, Col} from "react-bootstrap";
import SideMenu from "../partials/sideMenu";
import TopNavBar from "../partials/navBar";
import './layout.css';
import AppLogo from "../../assets/logo2.jpg"

const MainLayout = (props) => {
    return (
        <Fragment>
            <Container className={'mar_pad_0'} fluid>
                <Row className={'mar_pad_0'}>
                    <Col style={{boxShadow:"10px 0 5px -11px #aaa"}} className={'mar_pad_0'} xs={12} sm={3} xl={3} md={3} lg={3}>
                        <div style={{background: "#35a8fc",textAlign:'center',padding:"10%"}}>
                        <img style={{borderRadius:'50%'}} width="40%" src={AppLogo} />
                        </div>
                        <div style={{background: "#ffffff", height: "75vh"}}>
                            <SideMenu/>
                        </div>
                    </Col>
                    <Col className={'mar_pad_0'}>
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