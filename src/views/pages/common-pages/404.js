import React, {Component} from 'react';



class PageNotFound extends Component {

    render() {
        return (
                <div style={{textAlign:"center",marginTop:"17%",color:"red"}}>
                    <h1 > {"PAGE NOT FOUND" }</h1>
                    <a  href="/login">Redirect to login page</a>
                </div>
        );
    }

}

export default PageNotFound;