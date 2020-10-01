import React, { Fragment, Component} from 'react';
import {Col, Row} from "react-bootstrap";
import TopBreadCrumb from "../../partials/breadcrumb";
import StudentLists from './StudentList';
import { Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import classNames from 'classnames';
import DeleteModal from './delete'
import EditModal from './editrecord';
import {getSchoolListRequest} from '../../../store/actions/schoolList'
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
        this.props.getSchoolListRequest()
    }
    

    render() {
        const {props} = this
    const fields = [
        { key: 'school_name', columnName: 'School Name', type: 'school_name', form: false, required: false, visible: true, value: true },
        { key: 'address', columnName: 'Address', type: 'address', form: false, required: false, visible: true, value: true },
        { key: 'school_email', columnName: 'School Email', type: 'school_email', form: false, required: false, visible: true, value: true },
        { key: 'contact_no', columnName: 'Contact No', type: 'contact_no', form: false, required: false, visible: true, value: true },
        { key: 'location', columnName: 'Location', type: 'location', form: false, required: false, visible: true, value: true },
        { key: 'registration', columnName: 'Registration', type: 'registration', form: false, required: false, visible: true, value: true },
        {
            key: 'action', columnName: 'Actions', label: 'Actions', render: (value, record) => (
                <ActionsIcons/>
                
            ),visible: true, form: false
        }
    ]

    const data = [
        {
        school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
        {
            school_name: 'Govt School', address: '25 north street', school_email: "test@gmail.com",contact_no:'342134567907',location: 'chennai',registration:'29-08-2020'
        },
]
    return (
        <Fragment>
            <Row className={'mar_pad_0'}>
                <Col className={'mar_pad_0'}>
                    <TopBreadCrumb bread={props}/>
                </Col>
            </Row>
           <StudentLists
           fields = {fields}
           data = {data}
           />
        </Fragment>

    )
}
}


export default connect(null, {getSchoolListRequest})(DashboardPage);
