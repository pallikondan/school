import React, { Fragment, Component} from 'react';
import {Col, Row} from "react-bootstrap";
import TopBreadCrumb from "../../partials/breadcrumb";
import StudentLists from './StudentList';
import { Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import classNames from 'classnames';
import DeleteModal from './delete'
import EditModal from './editrecord';
import {getSchoolListRequest, getMemberRequest} from '../../../store/actions/school'
import {connect } from 'react-redux';
import schoolListIcon from "../../../assets/School_list_ic.png";



export const EditButton = ({ className, size, ...props }) => {
    return <Button style={{minWidth: 100}} className={classNames(className)} size={size || "small"} color="primary" variant="outlined" {...props}><Edit className="mr-1" fontSize="small" /> {props.label || "Button"}</Button>
}

export const DeleteButton = ({ className, size, ...props }) => {
    return <Button style={{minWidth: 100}} className={classNames(className)} size={size || "small"} variant="outlined" {...props}><Delete className="mr-1" fontSize="small" /> {props.label || "Button"}</Button>
}

export const ActionsIcons = () => {
    return(
        <div style={{display: "flex"}}>
            <EditModal></EditModal>
            <DeleteModal></DeleteModal>
        </div>
    )
}



class DashboardPage extends Component {
    // componentDidMount() {
    //     if(localStorage.getItem('UserType') === 'false') {
    //         this.props.getMemberRequest()
    //     } else {
    //         this.props.getSchoolListRequest()
    //     }
    // }

    componentDidMount() {
        this.props.getSchoolListRequest()
    }
    
    

    render() {
        const {props} = this
    const fields = [
        { key: 'name', columnName: 'School Name', type: 'school_name', form: false, required: false, visible: true, value: true },
        { key: 'address', columnName: 'Address', type: 'address', form: false, required: false, visible: true, value: true },
        { key: 'email', columnName: 'School Email', type: 'school_email', form: false, required: false, visible: true, value: true },
        { key: 'phone_number', columnName: 'Contact No', type: 'contact_no', form: false, required: false, visible: true, value: true },
        { key: 'location', columnName: 'Location', type: 'location', form: false, required: false, visible: true, value: true },
        { key: 'admin_username', columnName: 'User Name', type: 'admin_username', form: false, required: false, visible: true, value: true },
        {
            key: 'action', columnName: 'Actions', label: 'Actions', render: (value, record) => (
                <ActionsIcons/>
                
            ),visible: true, form: false
        }
    ]
    return (
        <Fragment>
            <Row className={'mar_pad_0'}>
                <Col className={'mar_pad_0'}>
                    <TopBreadCrumb name={'School List'} icon={schoolListIcon} isSearch={true} bread={props}/>
                </Col>
            </Row>
            {
                // localStorage.getItem('UserType') === 'false' ?
                // <StudentLists
                // fields = {memberKeys}
                // data = {memberData}
                // />
                // :
                <StudentLists
                fields = {fields}
                data = {props.schoolList}
                />
            }
          
        </Fragment>

    )
}
}

const mapStateToProps = (state) => {
    return {
        schoolList: state.School.schoolList.list
    }
}


export default connect(mapStateToProps, {getSchoolListRequest, getMemberRequest})(DashboardPage);
