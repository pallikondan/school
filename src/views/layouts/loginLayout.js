import React, {Fragment} from "react";
import {Container,Row} from "react-bootstrap";

const LoginLayout = (props) => {
    return (
        <Fragment>
            <Container fluid >
                <Row>
                    {props.children}
                </Row>
            </Container>
        </Fragment>

    );
};

export default LoginLayout;