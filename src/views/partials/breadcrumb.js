import React, {Fragment} from "react";
import {Navbar,Form,FormControl} from "react-bootstrap";
import schoolListIcon from "../../assets/School_list_ic.png";


const TopBreadCrumb = (props) => {

    return (
        <Fragment>
            <Navbar style={{background:"#dee6f1"}} className="justify-content-between">
                <Navbar.Brand href={'#'}>
                    <img
                        alt=""
                        src={schoolListIcon}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />{' '}
                    {<span className={'font-bold font-size-regular' }>{'Schools List'}</span>}
                </Navbar.Brand>


                <Form inline>
                    <FormControl style={{borderRadius:"10px"}} type="text" placeholder="search"/>
                </Form>
            </Navbar>
        </Fragment>

    )
}


export default TopBreadCrumb




