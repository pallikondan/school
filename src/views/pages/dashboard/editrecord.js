import React,{useRef, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Modal, Container, Row, Col, Form} from 'react-bootstrap'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "../../../assets/edit_ic.png";
import './dashboard.css'

export default function DeleteModal() {
  const [open, setOpen] = React.useState(false);
  const [logo, setLogo] = useState('');
  const [imageLogo, setImageLogo] = useState('');
  const [bulkFile, setbulkFile] = useState('');
  const imageUploadRef = useRef(null);
  const fileUploadRef = useRef(null);

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
    setbulkFile(file);
    console.log(file);

};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginRight: '8px'}}>
        <img className="h-over" src={DeleteIcon} width="25" onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Modal"}</DialogTitle>
        <DialogContent>
        <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            School Name
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text" required/>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a school Name.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Location [City]
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text"/>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a location.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>

                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Admin Username
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text"/>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a admin username.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>

                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            School Logo
                                        </Form.Label>
                                        <Col sm="8">
                                            {logo ? <img height={50} src={imageLogo} alt={'logo'}/> : ""}
                                            <input accept="image/png, image/jpeg, image/jpg"  style={{display: 'none'}} onChange={onChangeImageFile.bind(this)} ref={imageUploadRef} type="file"/>
                                            <Button size="xs" className={'font-small'} style={{
                                                background: '#6cc04c',
                                                border: "none",
                                                marginLeft: "20px",
                                                borderRadius: "10px"
                                            }} onClick={handleImageBtnClick}> {'+ Choose File'}</Button>
                                        </Col>

                                    </Form.Group>


                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Address
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text"/>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide address.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Contact Number
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="phone"/>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide 10 digit contact number.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            School Email
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="email"/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Col>

                        </Row>
                        <Row>
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
                                                    setbulkFile('')
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
                                            <input  style={{display: 'none'}} onChange={onChangeFile.bind(this)}
                                                          ref={fileUploadRef} type="file"/>
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

                        </Row>
                        <Row>
                            <Col>
                                <hr className={'modal-dotted'}/>
                            </Col>
                        </Row>
                    </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}