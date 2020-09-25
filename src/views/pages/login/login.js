import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import loginThumbnail from '../../../assets/login_vector_ic.png'
import TextField from '@material-ui/core/TextField';



const goToDashboardPage = (history) => {
    const location = {
        pathname: 'listschool',
    };
    history.push(location)
};



const loginPage = (props) => {


        return (
            <React.Fragment>
                <Col style={{background: "#35a8fc", height: "100vh", padding: "5% 1%"}}>
                    <div style={{background: "#35a8fc", textAlign: "center"}}>
                        <img src={loginThumbnail} height={500} alt={"loginbanner"}/>
                    </div>
                    <div style={{padding: "6%", textAlign: "center"}}>
                        <span className={'font-white'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Row>
                            <Col style={{textAlign: "center"}}>
                                <div style={{width: "50%", margin: "auto", marginTop: "40%"}}>
                                    <p>{"Logo"}</p>
                                    <div className={'mar_top_5'}>
                                        <span className={'font-medium font-black font-sub-headding'}>Log in to your account.</span>
                                    </div>
                                    <div className={'mar_top_5'}>
                                        <TextField id="email" label="Email Id" margin="normal"
                                                   InputLabelProps={{shrink: true,}} fullWidth={true}/>
                                        <TextField id="password" label="Password" margin="normal"
                                                   InputLabelProps={{shrink: true,}} type={'password'}
                                                   fullWidth={true}/>
                                    </div>
                                    <div style={{textAlign: "right"}}>
                                        <a href="#" className={'font-regular font-gray font-small'}>Forgot Password?</a>
                                    </div>
                                    <div className={'mar_top_5'}>
                                        <Button onClick={()=>{goToDashboardPage(props.history)}} className={'font-medium font-small'}
                                                style={{background: '#3fabf6', border: 0}} size="lg"
                                                block> Login</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </React.Fragment>
        );
    }



export default loginPage