import React from 'react'
import Button from '@material-ui/core/Button';


const LoginByGoogle = (props) => (

    <div>
        <Button color={"secondary"} variant={"contained"}
                onClick={props.logIn}

        >Login By Google</Button>

    </div>
);

export default LoginByGoogle