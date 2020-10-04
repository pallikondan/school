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
    componentDidMount() {
        console.log('from didmountttt',localStorage.getItem('UserType'))
        if(localStorage.getItem('UserType') === 'false') {
            this.props.getMemberRequest()
        } else {
            this.props.getSchoolListRequest()
        }
    }
    

    render() {
        const {props} = this
        console.log('propsssssssss', props, localStorage.getItem('UserType'));
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
                <ActionsIcons/>
                
            ),visible: true, form: false
        }
    ]

    const memberData =[
        {
            "id": 4,
            "school": {
                "id": 1,
                "name": "Sanatan Dharam Public School",
                "address": "Punjabi Bagh",
                "email": "sdps@sharklasers.com",
                "admin_username": "sdps_admin",
                "phone_number": "+918447494001"
            },
            "user": {
                "id": 6,
                "username": "shreya",
                "email": "shreya@sharklasers.com",
                "phone_number": "+919013688588",
                "is_active": true,
                "is_staff": false
            },
            "role": "teacher",
            "name": "Shreya Aggarwal",
            "address": "WZ 9089 near global cnetre, Delhi",
            "parent_name": null,
            "standard": null,
            "bus_no": "DL-8c-AG-8970",
            "bus_driver_name": "Karan Sharma",
            "driver_contact_no": "+919876543210",
            "admission_no": null,
            "teacher_id": "EMP-09-8978122-01"
        },
        {
            "id": 5,
            "school": {
                "id": 1,
                "name": "Sanatan Dharam Public School",
                "address": "Punjabi Bagh",
                "email": "sdps@sharklasers.com",
                "admin_username": "sdps_admin",
                "phone_number": "+918447494001"
            },
            "user": {
                "id": 7,
                "username": "karan",
                "email": "karan@sharklasers.com",
                "phone_number": "+919013688589",
                "is_active": true,
                "is_staff": false
            },
            "role": "student",
            "name": "Karan Sharma",
            "address": "WZ 9089 near global cnetre, Delhi",
            "parent_name": "Sunil Sharma",
            "standard": "XII",
            "bus_no": "DL-8c-AG-8970",
            "bus_driver_name": "Karan Sharma",
            "driver_contact_no": "+919876543210",
            "admission_no": "STD-19-89722-0112",
            "teacher_id": null
        }
    ]






    // const memberData =[
    //     {
    //         "id": 1,
    //         "school": {
    //             "id": 1,
    //             "name": "Sanatan Dharam Public School",
    //             "address": "Punjabi Bagh",
    //             "email": "sdps@sharklasers.com",
    //             "admin_username": "sdps_admin",
    //             "phone_number": "+918447494001"
    //         },
    //         "user": {
    //             "id": 2,
    //             "username": "sdps_admin",
    //             "email": "sdps@sharklasers.com",
    //             "phone_number": "+918447494001",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "admin",
    //         "name": null,
    //         "address": null,
    //         "parent_name": null,
    //         "standard": null,
    //         "bus_no": null,
    //         "bus_driver_name": null,
    //         "driver_contact_no": null,
    //         "admission_no": null,
    //         "teacher_id": null
    //     },
    //     {
    //         "id": 2,
    //         "school": {
    //             "id": 2,
    //             "name": "Sanatan Dharam Public School 2",
    //             "address": "Punjabi Bagh 2",
    //             "email": "sdps2@sharklasers.com",
    //             "admin_username": "sdps_admin_2",
    //             "phone_number": "+918447494002"
    //         },
    //         "user": {
    //             "id": 4,
    //             "username": "sdps_admin_2",
    //             "email": "sdps2@sharklasers.com",
    //             "phone_number": "+918447494002",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "admin",
    //         "name": null,
    //         "address": null,
    //         "parent_name": null,
    //         "standard": null,
    //         "bus_no": null,
    //         "bus_driver_name": null,
    //         "driver_contact_no": null,
    //         "admission_no": null,
    //         "teacher_id": null
    //     },
    //     {
    //         "id": 3,
    //         "school": {
    //             "id": 3,
    //             "name": "Sanatan Dharam Public School 3",
    //             "address": "Punjabi Bagh 3",
    //             "email": "sdps3@sharklasers.com",
    //             "admin_username": "sdps_admin_3",
    //             "phone_number": "+918447494003"
    //         },
    //         "user": {
    //             "id": 5,
    //             "username": "sdps_admin_3",
    //             "email": "sdps3@sharklasers.com",
    //             "phone_number": "+918447494003",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "admin",
    //         "name": null,
    //         "address": null,
    //         "parent_name": null,
    //         "standard": null,
    //         "bus_no": null,
    //         "bus_driver_name": null,
    //         "driver_contact_no": null,
    //         "admission_no": null,
    //         "teacher_id": null
    //     },
    //     {
    //         "id": 4,
    //         "school": {
    //             "id": 1,
    //             "name": "Sanatan Dharam Public School",
    //             "address": "Punjabi Bagh",
    //             "email": "sdps@sharklasers.com",
    //             "admin_username": "sdps_admin",
    //             "phone_number": "+918447494001"
    //         },
    //         "user": {
    //             "id": 6,
    //             "username": "shreya",
    //             "email": "shreya@sharklasers.com",
    //             "phone_number": "+919013688588",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "teacher",
    //         "name": "Shreya Aggarwal",
    //         "address": "WZ 9089 near global cnetre, Delhi",
    //         "parent_name": null,
    //         "standard": null,
    //         "bus_no": "DL-8c-AG-8970",
    //         "bus_driver_name": "Karan Sharma",
    //         "driver_contact_no": "+919876543210",
    //         "admission_no": null,
    //         "teacher_id": "EMP-09-8978122-01"
    //     },
    //     {
    //         "id": 5,
    //         "school": {
    //             "id": 1,
    //             "name": "Sanatan Dharam Public School",
    //             "address": "Punjabi Bagh",
    //             "email": "sdps@sharklasers.com",
    //             "admin_username": "sdps_admin",
    //             "phone_number": "+918447494001"
    //         },
    //         "user": {
    //             "id": 7,
    //             "username": "karan",
    //             "email": "karan@sharklasers.com",
    //             "phone_number": "+919013688589",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "student",
    //         "name": "Karan Sharma",
    //         "address": "WZ 9089 near global cnetre, Delhi",
    //         "parent_name": "Sunil Sharma",
    //         "standard": "XII",
    //         "bus_no": "DL-8c-AG-8970",
    //         "bus_driver_name": "Karan Sharma",
    //         "driver_contact_no": "+919876543210",
    //         "admission_no": "STD-19-89722-0112",
    //         "teacher_id": null
    //     },
    //     {
    //         "id": 6,
    //         "school": {
    //             "id": 4,
    //             "name": "test School",
    //             "address": "Punjabi Bagh",
    //             "email": "test@sharklasers.com",
    //             "admin_username": "test_admin",
    //             "phone_number": "1234567890"
    //         },
    //         "user": {
    //             "id": 16,
    //             "username": "test_admin",
    //             "email": "test@sharklasers.com",
    //             "phone_number": "1234567890",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "admin",
    //         "name": "test_admin",
    //         "address": null,
    //         "parent_name": null,
    //         "standard": null,
    //         "bus_no": null,
    //         "bus_driver_name": null,
    //         "driver_contact_no": null,
    //         "admission_no": null,
    //         "teacher_id": null
    //     },
    //     {
    //         "id": 7,
    //         "school": {
    //             "id": 2,
    //             "name": "Sanatan Dharam Public School 2",
    //             "address": "Punjabi Bagh 2",
    //             "email": "sdps2@sharklasers.com",
    //             "admin_username": "sdps_admin_2",
    //             "phone_number": "+918447494002"
    //         },
    //         "user": {
    //             "id": 17,
    //             "username": "sumesh_kumar_1",
    //             "email": "sumesh@gmail.com",
    //             "phone_number": "+918447494016",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "student",
    //         "name": "Neeraj Aggarwal",
    //         "address": "Delhi",
    //         "parent_name": "Sumesh Kumar",
    //         "standard": "XII",
    //         "bus_no": "10",
    //         "bus_driver_name": "Karan Asthana",
    //         "driver_contact_no": "+918447494001",
    //         "admission_no": "STUD/45678/567/12/A/",
    //         "teacher_id": ""
    //     },
    //     {
    //         "id": 8,
    //         "school": {
    //             "id": 5,
    //             "name": "testname1",
    //             "address": "testaddress1",
    //             "email": "testemail@test.com",
    //             "admin_username": "testadmin1",
    //             "phone_number": "1234569875"
    //         },
    //         "user": {
    //             "id": 18,
    //             "username": "testadmin1",
    //             "email": "testemail@test.com",
    //             "phone_number": "1234569875",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "admin",
    //         "name": "testadmin1",
    //         "address": null,
    //         "parent_name": null,
    //         "standard": null,
    //         "bus_no": null,
    //         "bus_driver_name": null,
    //         "driver_contact_no": null,
    //         "admission_no": null,
    //         "teacher_id": null
    //     },
    //     {
    //         "id": 9,
    //         "school": {
    //             "id": 6,
    //             "name": "testschool2",
    //             "address": "testadd3",
    //             "email": "test@test3.com",
    //             "admin_username": "testname3",
    //             "phone_number": "1452365789"
    //         },
    //         "user": {
    //             "id": 19,
    //             "username": "testname3",
    //             "email": "test@test3.com",
    //             "phone_number": "1452365789",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "admin",
    //         "name": "testname3",
    //         "address": null,
    //         "parent_name": null,
    //         "standard": null,
    //         "bus_no": null,
    //         "bus_driver_name": null,
    //         "driver_contact_no": null,
    //         "admission_no": null,
    //         "teacher_id": null
    //     },
    //     {
    //         "id": 10,
    //         "school": {
    //             "id": 7,
    //             "name": "testschool5",
    //             "address": "testaddress5",
    //             "email": "testmailid@test.com",
    //             "admin_username": "testadminuser5",
    //             "phone_number": "789654123"
    //         },
    //         "user": {
    //             "id": 20,
    //             "username": "testadminuser5",
    //             "email": "testmailid@test.com",
    //             "phone_number": "789654123",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "admin",
    //         "name": "testadminuser5",
    //         "address": null,
    //         "parent_name": null,
    //         "standard": null,
    //         "bus_no": null,
    //         "bus_driver_name": null,
    //         "driver_contact_no": null,
    //         "admission_no": null,
    //         "teacher_id": null
    //     },
    //     {
    //         "id": 11,
    //         "school": {
    //             "id": 8,
    //             "name": "dummmy",
    //             "address": "dummy",
    //             "email": "dummy@mail.com",
    //             "admin_username": "dummy",
    //             "phone_number": "dummy"
    //         },
    //         "user": {
    //             "id": 21,
    //             "username": "dummy",
    //             "email": "dummy@mail.com",
    //             "phone_number": "dummy",
    //             "is_active": true,
    //             "is_staff": false
    //         },
    //         "role": "admin",
    //         "name": "dummy",
    //         "address": null,
    //         "parent_name": null,
    //         "standard": null,
    //         "bus_no": null,
    //         "bus_driver_name": null,
    //         "driver_contact_no": null,
    //         "admission_no": null,
    //         "teacher_id": null
    //     }
    // ]


  

 
    return (
        <Fragment>
            <Row className={'mar_pad_0'}>
                <Col className={'mar_pad_0'}>
                    <TopBreadCrumb bread={props}/>
                </Col>
            </Row>
            {
                localStorage.getItem('UserType') === 'false' ?
                <StudentLists
                fields = {memberKeys}
                data = {memberData}
                />
                :
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
    console.log('schoollistttttt', state);
    return {
        schoolList: state.School.schoolList.list
    }
}


export default connect(mapStateToProps, {getSchoolListRequest, getMemberRequest})(DashboardPage);
