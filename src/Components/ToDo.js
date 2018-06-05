import React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {addTxt,sendTaskToDb,del} from "../state/todo";
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import {loggedOut} from "../state/auth";

const styles={

    h2:{
        textAlign:'center',
        fontFamily: 'Prosto One',
        marginBottom:'3em',
    },
    logOut:{
       position:'absolute' ,
        right:'0px',
        top:'0px',
        backgroundColor:'#990c50'
    },
    h3:{
        marginTop:'3em',
          marginBottom:'3em',
        textAlign:'center',
        padding:'30px'
    },
    span__h3:{
        color:'#3f51b5'
    }
};
const ToDo = (props) => (

    <div>
        <Button variant={"contained"}
        color={"secondary"}
        onClick={props.logOut}
            style={styles.logOut}
        >Log Out</Button>
        {
            props.quote.map(value => <h3 style={styles.h3}>Quote of the day: " {value.value} "</h3>)
        }
        <h2 style={styles.h2}>ToDo <span style={styles.span__h3}>APP </span>&#9400;</h2>
        <TextField
            fullWidth={true}
            placeholder={'Type task name here'}
            onChange={props.addTxt}
            value={props.txt}
        />
        <Button variant={"contained"}
                color={"primary"}
                fullWidth={true}
                onClick={props.sendTaskToDb}
        >ADD TASK
        </Button>
        {
       props.tasks.map((value,index)=>

           <MenuItem> {value.description}<DeleteIcon onClick={()=>props.deleteTask(value.key)}/></MenuItem>
       )
        }
    </div>);
const mapStateToProps = (state) => ({

    tasks:state.todo.tasks,
    quote:state.quote.quote,
    txt:state.todo.txt

});
const mapDispatchToProps = (dispatch) => ({

    addTxt: (event) => dispatch(addTxt(event.target.value)),
    sendTaskToDb:()=> dispatch(sendTaskToDb()),
    deleteTask:(key)=> dispatch(del(key)),
    logOut:()=> dispatch(loggedOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)