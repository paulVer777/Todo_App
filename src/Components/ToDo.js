import React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {addTxt,sendTaskToDb} from "../state/todo";
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';



const ToDo = (props) => (

    <div>
        <h2>ToDO :)</h2>
        <TextField
            fullWidth={true}
            placeholder={'Type task name here'}
            onChange={props.addTxt}
        />
        <Button variant={"contained"}
                color={"primary"}
                fullWidth={true}
                onClick={props.sendTaskToDb}
        >ADD TASK
        </Button>
        {
       props.tasks.map((value,index)=>

           <MenuItem> {value.description}<DeleteIcon onClick={()=>alert("j")}/></MenuItem>


       )
        }




    </div>);


const mapStateToProps = (state) => ({

    tasks:state.todo.tasks

});

const mapDispatchToProps = (dispatch) => ({

    addTxt: (event) => dispatch(addTxt(event.target.value)),
    sendTaskToDb:()=> dispatch(sendTaskToDb())
});


export default connect(mapStateToProps, mapDispatchToProps)(ToDo)