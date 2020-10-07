import React,{useState} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {loginToApp} from "../../../store/actions/login";
import loginThumbnail from '../../../assets/login_vector_ic.png'
import TextField from '@material-ui/core/TextField';
import {Alert} from "react-bootstrap";
import RoundedLogo from "../../../assets/round logo.jpg"
import './login.css'
const login = (data,action, history) =>{
    const loginData = new FormData();
    loginData.append('username', data.username);
    loginData.append('password', data.password);
    action({loginData, history, redirect});
    // redirect(history)
};

const redirect = (history) => {
    history.push('listschool')
}


const LoginPage = (props) => {
    const [credentials,setCredentials] = useState({username:"",password:""});
    const [isAlertOpen,setIsAlertOpen] = useState(false);
    const handleUserinput = (e) =>{
        setIsAlertOpen(false);
        setCredentials({...credentials,[e.target.id]:e.target.value});
    };

        return (
            <React.Fragment>
                <Col className="side-panel" style={{background: "#35a8fc"}}>
                    <div style={{height: "100vh",padding:'10vh 0 0 0'}}>
                    <div style={{background: "#35a8fc", textAlign: "center"}}>
                        <img src={loginThumbnail} height={600} alt={"loginbanner"}/>
                    </div>
                    <div style={{padding: "6%", textAlign: "center"}}>
                        <span className={'font-white'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                    </div>
                    </div>
                </Col>
                <Col>
                    <div style={{height: "100vh"}}>
                        <Row>
                            <Col style={{textAlign: "center"}}>
                                <div  style={{width: "50%", margin: "auto", marginTop: "35vh"}}>
                                <div style={{textAlign:'center'}}><img style={{borderRadius: '50%'}} width="25%" src={RoundedLogo} alt={'MiKids'}/></div>
                                    <div className={'mar_top_5'}>
                                        <span className={'font-medium font-black font-sub-headding'}>Log in to your account.</span>
                                    </div>
                                    <div className={'mar_top_5'}>
                                        <form>
                                        <TextField error={props.login.error} autoComplete={'on'}  id="username" label="Email Id" margin="normal" value={credentials.username} onChange={handleUserinput}
                                                   InputLabelProps={{shrink: true,}} fullWidth={true}/>
                                        <TextField error={props.login.error}  autoComplete={'on'}  id="password" label="Password" margin="normal" value={credentials.password} onChange={handleUserinput}
                                                   InputLabelProps={{shrink: true,}} type={'password'}
                                                   fullWidth={true}/>
                                        </form>
                                    </div>
                                    <div style={{textAlign: "right"}}>
                                        <a href="#" className={'font-regular font-gray font-small'}>Forgot Password?</a>
                                    </div>
                                    <div className={'mar_top_5'}>
                                        <Button onClick={()=>{login(credentials,props.loginToApp, props.history)}} className={'font-medium font-small'}
                                                style={{background: '#3fabf6', border: 0}} size="lg"
                                                block> Login</Button>
                                    </div>
                                    <br/>
                                    <Alert show={isAlertOpen} variant={'danger'}>
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

export default withRouter(connect(mapStateToProps,{loginToApp})(LoginPage))