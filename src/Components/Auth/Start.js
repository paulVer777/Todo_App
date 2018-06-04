import React from 'react'
import LoginByGoogle from './LoginByGoogle'
import {connect} from "react-redux";
import {logInByGoogle} from "../../state/auth";


const Start = (props) => (

    <div>
        {
            props.loggedIn ?
                props.children
                :
                <LoginByGoogle logIn={props.logInByGoogle}/>
        }
    </div>
);
const mapStateToProps = (state) => ({

    loggedIn:state.auth.isUserLoggedIn

});

const mapDispatchToProps = (dispatch) => ({

    logInByGoogle:()=>dispatch(logInByGoogle())

});


export default connect(mapStateToProps, mapDispatchToProps)(Start)