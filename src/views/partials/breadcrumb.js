import React, {Fragment} from "react";
import {Navbar,Form,FormControl} from "react-bootstrap";


const TopBreadCrumb = (props) => {

    return (
        <Fragment>
            <Navbar style={{background:"#dee6f1"}} className="justify-content-between">
                <Navbar.Brand href={props.bread.children.props.location.pathname}>
                    <img
                        alt=""
                        src="/logo.svg"
                        width="20"
                        height="20"
                        className="d-inline-block align-top"
                    />{' '}
                    {<span style={{fontSize:"16px"}}>{props.bread.children.props.location.pathname.slice(1)}</span>}
                </Navbar.Brand>


                <Form inline>
                    <FormControl  type="text" placeholder="search"/>
                </Form>
            </Navbar>
        </Fragment>

    )
}


export default TopBreadCrumb




