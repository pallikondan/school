import React, {useState, useRef,useEffect} from "react";
import {Button, Modal, Container, Row, Col, Form} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from "@material-ui/core/IconButton";
import {connect} from 'react-redux';
import {registerSchool, registerMultipleSchoolRequest} from  '../../../store/actions/school'
import {Alert} from "react-bootstrap";
import XLSX from 'xlsx'


const  UserModal = (props) => {
    const [show, setShow] = useState(props.show);
    const [logo, setLogo] = useState('');
    const [bulkUpload, enableBulkUpload] = useState(false);
    const [bulkUploadData, setBulkData] = useState([]);
    const [imageLogo, setImageLogo] = useState('');
    const [bulkFile, setbulkFile] = useState('');
    const imageUploadRef = useRef(null);
    const fileUploadRef = useRef(null);
    const [isAlertType,setIsAlertType] = useState({isOpen:true,type:'success',message:'success / error will show here'});

    const formInitState = {
        schoolName:'',
        userName:'',
        parentName:'',
        admissionNo:'',
        teacherId:'',
        driver_contact_number:'',
        location:'',
        address:'',
        role:''
    };
    const formInitErrorState = {
        schoolName:false,
        userName:false,
        parentName:false,
        admissionNo:false,
        teacherId:false,
        driver_contact_number:false,
        location:false,
        address:false,
        role:false
    };

    const [formDetails, setFormDetails] = useState(formInitState);
    const [formErrorState, setFormErrorState] = useState(formInitErrorState);

    const handleSubmission = () => {
        if(bulkUpload) {
            props.registerMultipleSchoolRequest(bulkUploadData)
        } else {
        let fieldsInObj;
        let registerData = {
            ...formDetails,
        };
        for(fieldsInObj in registerData){
            if(registerData[fieldsInObj] === ''){
                setFormErrorState({...formErrorState,[fieldsInObj]:true});
                return false
            }
            }

        setFormErrorState({...formErrorState,[fieldsInObj]:false});
            props.registerSchool(registerData);
        
        // setShow(false);
        // setFormDetails(formInitState);
        setTimeout(() => {
            setShow(false)
        }, 300)
    }
        };

    const handleClose = () => {
        props.history.push('userdetails');
        setFormDetails(formInitState);
        setFormErrorState(formInitErrorState);
        setShow(false);
    };

    const validateFields = (e) => {
        if(e.target.value===''){
            setFormErrorState({...formErrorState,[e.target.id]:true})
        }else{
            setFormErrorState({...formErrorState,[e.target.id]:false})

        }
    };

    const handleImageBtnClick = () => {
        /*Collecting node-element and performing click*/
        imageUploadRef.current.click();
    };
    const handleFileBtnClick = () => {
        /*Collecting node-element and performing click*/
        fileUploadRef.current.click();
    };
    const onChangeImageFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        let file = event.target.files[0];
        setLogo(file);
        if (file) {
            const blob = file.slice(0, file.size);
            if (blob.size) {
                const url = URL.createObjectURL(blob);
                file.preview = url;
                setImageLogo(url)
            }
        }
    };

    const onChangeFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        let file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = e => {
          var data = e.target.result;
          var workbook = XLSX.read(data, {
              type: 'binary'
          })

          workbook.SheetNames.forEach((sheetName) => {
              var xl_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
              setBulkData(xl_row_object);
              enableBulkUpload(true)
              //props.registerMultipleSchoolRequest(xl_row_object)
          })

     
        };
        reader.readAsBinaryString(file)
        //reader.readAsText(file);
        setbulkFile(file);
    };

    // useEffect(()=>{
    //     if(props.School.success){
    //         setIsAlertType({isOpen:true,type:'success',message: 'School Added Successfully'});
    //     }else{
    //         setIsAlertType({isOpen:true,type:'danger',message: 'Error in Adding School, Please Try again'});
    //     }
    //
    // },[props.School.success]);


    return (
        <>
            <Modal onEscapeKeyDown={props.onClose} show={show} size={'xl'} centered dialogClassName='modal-dialog' onHide={handleClose}>
                <Modal.Header bsPrefix={'pad_2'}>
                    {props.type==='edit'?<Modal.Title bsPrefix={'font-small font-medium'}>Edit User</Modal.Title>:<Modal.Title bsPrefix={'font-small font-medium'}>Register New User</Modal.Title>}
                    <hr className={'modal-dotted'}/>
                </Modal.Header>
                <Form >
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group as={Row}>

                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Username
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control onBlur={validateFields} value={formDetails.userName} onChange={e=>setFormDetails({...formDetails,admin_username:e.target.value})} id={'userName'}  type="text"/>
                                            {formErrorState.userName ? <span className={'font-extra-small font-red'}> Please provide a username.</span> : ""}
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Location [City]
                                        </Form.Label>
                                        <Col>
                                            <Form.Control required  onBlur={validateFields} value={formDetails.location} onChange={e=>setFormDetails({...formDetails,location:e.target.value})} id={'location'}  type="text"/>
                                            {formErrorState.location ? <span className={'font-extra-small font-red'}>Please provide a location.</span> : ""}

                                        </Col>
                                    </Form.Group>
                                    <Form.Group  as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            School Name
                                        </Form.Label>
                                        <Col>
                                            <Form.Control  id={'schoolName'} onBlur={validateFields} onChange={e=>setFormDetails({...formDetails,name:e.target.value})} value={formDetails.name} type="text" required />
                                            {formErrorState.schoolName ? <span className={'font-extra-small font-red'}>Please provide a school Name.</span> : ""}
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a school name.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>


                                </Col>
                                <Col>
                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Address
                                        </Form.Label>
                                        <Col>
                                            <Form.Control onBlur={validateFields} value={formDetails.address}  onChange={e=>setFormDetails({...formDetails,address:e.target.value})} id={'address'}  type="text"/>
                                            {formErrorState.address ? <span className={'font-extra-small font-red'}> Please provide address.</span> : ""}
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Driver Contact Number
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control onBlur={validateFields} value={formDetails.driver_contact_number} onChange={e=>setFormDetails({...formDetails,driver_contact_number:e.target.value})} id={'driver_contact_number'} type="phone"/>
                                            {formErrorState.driver_contact_number ? <span className={'font-extra-small font-red'}> Please provide 10 digit contact number.</span> : ""}
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Role Type
                                        </Form.Label>
                                        <Col>
                                            <Form.Control onBlur={validateFields}  value={formDetails.role} onChange={e=>setFormDetails({...formDetails,role:e.target.value})} id={'role'}  type="text"/>
                                            {formErrorState.role ? <span className={'font-extra-small font-red'}> Please provide role.</span> : ""}
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                {props.type !== 'edit' ?
                                    <Col>
                                    <hr className={'modal-dotted'}/>
                                    <p>OR</p>
                                    <p>Upload Bulk file</p>
                                    <Row>
                                        <Col>
                                            <div style={{
                                                boxShadow: '3px 3px 15px #cccccc',
                                                borderRadius: "10px",
                                                border: "1px solid #eee",
                                                height: '35px',
                                                paddingLeft: '10px'
                                            }}>
                                                <span className={'font-small'}>{bulkFile.name}</span>
                                                {bulkFile ?
                                                    <IconButton onClick={() => {
                                                        setbulkFile(''); enableBulkUpload(false)
                                                    }} disableRipple={true} size={'small'} aria-label="delete">
                                                        <HighlightOffIcon/>
                                                    </IconButton>
                                                    : ""}
                                                <Button size="xs" className={'font-small'} style={{
                                                    background: '#6cc04c',
                                                    border: "none",
                                                    marginLeft: "20px",
                                                    borderRadius: "10px",
                                                    float: 'right'
                                                }} onClick={handleFileBtnClick}> {'upload'}</Button>
                                            </div>
                                        </Col>
                                        <Col>
                                            <Form.Group as={Row}>
                                                <input  style={{display: 'none'}} onChange={onChangeFile.bind(this)} ref={fileUploadRef} type="file"/>
                                                <p style={{fontWeight: 'bold', lineHeight: 3}}
                                                   className={'font-italic font-extra-small font-gray'}> Maximum file size
                                                    limit - 10 MB</p>
                                                <Form.Control.Feedback type="invalid">
                                                    Please upload bulk file.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                    :<Col/>}
                            </Row>
                            <Row>
                                <Col>
                                    <hr className={'modal-dotted'}/>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer bsPrefix>
                        {/* <div style={{textAlign:'center'}}>
                            <Alert dismissible onClose={()=>setIsAlertType({...isAlertType,isOpen: false})} show={isAlertType.isOpen} variant={isAlertType.type}>
                               {isAlertType.message}
                            </Alert>
                        </div> */}
                        <div className={'modal-footer'}>
                            <Button style={{border: "1px solid gray"}} className={'font-black font-extra-small'}
                                    variant="outline" onClick={props.onClose}>
                                Cancel
                            </Button>
                            {props.type==="edit" ?  <Button onClick={handleSubmission} className={'font-extra-small btn-blue'} >
                                    Edit User
                                </Button> :
                            <Button onClick={handleSubmission} className={'font-extra-small btn-blue'} >
                                Register User
                            </Button>
                            }
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) =>{
    return {
        school:state.School
    }
};

export default withRouter(connect(mapStateToProps,{registerSchool, registerMultipleSchoolRequest})(UserModal))
