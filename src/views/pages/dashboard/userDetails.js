import React, {Component} from "react";
import TopBreadCrumb from "../../partials/breadcrumb";
import schoolListIcon from "../../../assets/School_list_ic.png";
import {Col, Row} from "react-bootstrap";
import UserModal from "../modals/userModal";
class UserDetails extends Component {

    constructor() {
        super();
        this.state={
        showUserModal : false,
            modalType:'new',
            userDetails:{}
        }
    }
    componentDidMount() {

    }

    handleModalClose = () => {
        this.setState({showUserModal:false});
        this.props.history.push('userdetails');

    };

    render () {
    return (
        <>
            <Row className={'mar_pad_0'}>
                <Col className={'mar_pad_0'}>
                    <TopBreadCrumb name={"User's List"} icon={schoolListIcon} isSearch={true} bread={this.props}/>
                </Col>
            </Row>
            <Row className={'mar_pad_0'}>
                <Col className={'mar_pad_0'}>
                    <h3>Show User List Grid  Here</h3>
                    <button onClick={()=>{this.setState({showUserModal:true,modalType:'new'})}}>Click to open add user modal</button>
                    <button onClick={()=>{this.setState({showUserModal:true,modalType:'edit'})}}>Click to open edit user modal</button>
                    {this.state.showUserModal ? <UserModal show={this.state.showUserModal} onClose={this.handleModalClose} userDetails={this.state.userDetails}  type={this.state.modalType} /> : "" }

                </Col>
            </Row>
        </>
    )
}

}


export default UserDetails
