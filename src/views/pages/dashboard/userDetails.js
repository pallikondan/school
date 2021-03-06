import React, {Component} from "react";
import {connect } from 'react-redux';
import TopBreadCrumb from "../../partials/breadcrumb";
import schoolListIcon from "../../../assets/School_list_ic.png";
import {Col, Row} from "react-bootstrap";
import UserModal from "../modals/userModal";
import UserDeleteModal from "../modals/UserDeleteModal";
import EditModal from '../modals/userModal';
import DeleteModal from './delete'
import UserDataTable from './StudentList';
import {getMemberRequest} from '../../../store/actions/school'

export const ActionsIcons = () => {
    return(
        <div style={{display: "flex"}}>
            <EditModal/>
            <UserDeleteModal/>
        </div>
    )
}
//import EditModal from '../modals/userModal';


class UserDetails extends Component {

    constructor() {
        super();
        this.state={
            userDetails:{}
        }
    }
    componentDidMount() {
        this.props.getMemberRequest()
    }

    render () {
        const memberKeys = [
            { key: 'name', columnName: 'School Name', type: 'school_name', form: false, required: false, visible: true, value: true },
            { key: 'address', columnName: 'Address', type: 'address', form: false, required: false, visible: true, value: true },
            { key: 'role', columnName: 'Role Type', type: 'role', form: false, required: false, visible: true, value: true },
            { key: 'driver_contact_no', columnName: 'Driver Contact No', type: 'driver_contact_no', form: false, required: false, visible: true, value: true },
            { key: 'location', columnName: 'Location', type: 'location', form: false, required: false, visible: true, value: true },
            { key: 'admin_username', columnName: 'User Name', type: 'admin_username', form: false, required: false, visible: true, value: true },
            { key: 'parent_name', columnName: 'Parent Name', type: 'parent_name', form: false, required: false, visible: true, value: true },
            { key: 'parent_name', columnName: 'Admission No', type: 'admission_no', form: false, required: false, visible: true, value: true },
            { key: 'teacher_id', columnName: 'Teacher Id', type: 'teacher_id', form: false, required: false, visible: true, value: true },
            {
                key: 'action', columnName: 'Actions', label: 'Actions', render: (value, record) => (
                    <div style={{display: "flex"}}>
            <UserModal userDetails={record} />
            <DeleteModal/>
        </div>
                    
                ),visible: true, form: false
            }
        ]
    return (
        <>
            <Row className={'mar_pad_0'}>
                <Col className={'mar_pad_0'}>
                    <TopBreadCrumb name={"Member's List"} icon={schoolListIcon} isSearch={true} bread={this.props}/>
                </Col>
            </Row>
            <Row className={'mar_pad_0'}>
                <Col className={'mar_pad_0'}>
                    <UserDataTable fields = {memberKeys} data={this.props.memberList}/>
                    {/* <button onClick={()=>{this.setState({showUserModal:true,modalType:'new'})}}>Click to open add user modal</button>
                    <button onClick={()=>{this.setState({showUserModal:true,modalType:'edit'})}}>Click to open edit user modal</button>
                    {this.state.showUserModal ? <UserModal show={this.state.showUserModal} onClose={this.handleModalClose} userDetails={this.state.userDetails}  type={this.state.modalType} /> : "" } */}

                </Col>
            </Row>
        </>
    )
}

}

const mapStateToProps = (state) => {
    return {
        memberList: state.School.memberList.list,
        loginData: state.login

    }
}


export default connect(mapStateToProps, {getMemberRequest})(UserDetails)
