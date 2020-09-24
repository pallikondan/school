import React, { Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import TopBreadCrumb from "../../partials/breadcrumb";



const dashboardPage = (props) => {
    return (
        <Fragment>
            <Row className={'mar_pad_0'}>
                <Col className={'mar_pad_0'}>
                    <TopBreadCrumb bread={props}/>
                </Col>
            </Row>
            <p>dashboard page</p>
        </Fragment>

    )
}


export default dashboardPage
