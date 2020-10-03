import React,{useState,useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {loginToApp} from "../../../store/actions/login";
import loginThumbnail from '../../../assets/login_vector_ic.png'
import TextField from '@material-ui/core/TextField';
import {Alert} from "react-bootstrap";
import './login.css'

const login = (data,action) =>{
    const loginData = new FormData();
    loginData.append('username', data.username);
    loginData.append('password', data.password);
    action(loginData);
};


const LoginPage = (props) => {

    const [credentials,setCredentials] = useState({username:"",password:""});
    const [isAlertOpen,setIsAlertOpen] = useState(false);
    useEffect(()=>{
        if(props.login.success){

        }else{
            setIsAlertOpen(true);
        }

    },[props.login.success]);
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
                                <div className="circle">Logo</div>
                                    <div className={'mar_top_5'}>
                                        <span className={'font-medium font-black font-sub-headding'}>Log in to your account.</span>
                                    </div>
                                    <div className={'mar_top_5'}>
                                        <form>
                                        <TextField error={props.login.error} autoComplete={'on'}  id="email" label="Email Id" margin="normal" value={credentials.username} onChange={e=>setCredentials({...credentials,username:e.target.value})}
                                                   InputLabelProps={{shrink: true,}} fullWidth={true}/>
                                        <TextField error={props.login.error}  autoComplete={'on'}  id="password" label="Password" margin="normal" value={credentials.password} onChange={e=>setCredentials({...credentials,password:e.target.value})}
                                                   InputLabelProps={{shrink: true,}} type={'password'}
                                                   fullWidth={true}/>
                                        </form>
                                    </div>
                                    <div style={{textAlign: "right"}}>
                                        <a href="#" className={'font-regular font-gray font-small'}>Forgot Password?</a>
                                    </div>
                                    <div className={'mar_top_5'}>
                                        <Button onClick={()=>{login(credentials,props.loginToApp)}} className={'font-medium font-small'}
                                                style={{background: '#3fabf6', border: 0}} size="lg"
                                                block> Login</Button>
                                    </div>
                                    <br/>
                                    <Alert dismissible onClose={isAlertOpen} show={props.login.error} variant={'danger'}>
                                        Incorrect Username or Password
                                    </Alert>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </React.Fragment>
        );
    }

const mapStateToProps = (state) =>{
    return {
        login:state.Login
    }
}

export default connect(mapStateToProps,{loginToApp})(LoginPage)