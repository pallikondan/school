import React, {Fragment} from "react";
import {Container,Row} from "react-bootstrap";
import LoadingBar from 'react-redux-loading-bar'

const LoginLayout = (props) => {
    return (
        <Fragment>
            <LoadingBar style={{ backgroundColor: '#35a8fc', height: '5px' }} />
            <Container fluid >
                <Row>
                    {props.children}
                </Row>
            </Container>
        </Fragment>

    );
};

export default LoginLayout;