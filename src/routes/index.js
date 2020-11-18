import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import LoginLayout from "../views/layouts/loginLayout";
import MainLayout from "../views/layouts/MainLayout";

import publicRoutes,{defaultRoute} from "./publicRoutes";
import privateRoutes,{defaultPrivateRoute,adminRoutes} from "./privateRoutes";
import PageNotFound from "../views/pages/common-pages/404";

import {getAuthToken} from '../utils/Auth'

const  AllRoutes = (props) => {


    const auth = getAuthToken();
    const type = localStorage.getItem('UserType');
    return <BrowserRouter>
        <Switch>

            {
                publicRoutes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            replace={route.replace}
                            render={props => {
                                return (
                                    <LoginLayout>
                                        <route.component {...props} />
                                    </LoginLayout>
                                )
                            }}
                        />
                    )
                })
            }
            {
                privateRoutes.map((route, index) => {
                        if(auth){
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={props => {
                                        return (
                                            <MainLayout>
                                                <route.component {...props} />
                                            </MainLayout>
                                        )
                                    }}

                                />
                            )
                        }else{
                            return  false
                        }

                    }
                )
            }

            {
                adminRoutes.map((route, index) => {
                        if(type==='true'){
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={props => {
                                        return (
                                            <MainLayout>
                                                <route.component {...props} />
                                            </MainLayout>
                                        )
                                    }}

                                />
                            )
                        }else{
                            return  false
                        }

                    }
                )
            }

            <Route exact={true} path="/404"  render={props => {return (<PageNotFound/>)}} />

            {!auth ? <Route render={() => <Redirect to={defaultRoute.redirect}/>}/> : <Route render={(props) => {
                return ( props.location.pathname !== '/' ? <Route render={() => <Redirect to='/404'/>}/> : <Route render={() => <Redirect to={defaultPrivateRoute.redirect}/>}/> )
            }
            }/> }


        </Switch>
    </BrowserRouter>

};


const mapStateToProps = (state) => ({
    isAuthorized: state.Login.isAuthorized
})

export default connect(mapStateToProps)(AllRoutes)
