import {database} from "../firebase";
import {mapObjectToArray} from "../functions";

const ADDNEWTASK = 'todo/ADDNEWTASK';
const ADDTXT = 'todo/ADDTXT';
const CLEARTXT='todo/CLEARTXT';

export const addNewTask = (tasks) => ({type: ADDNEWTASK, tasks});
export const addTxt = (txt) => ({type: ADDTXT, txt});
export const clearTxt = () => ({type: CLEARTXT});

const initialState = {
    tasks: [],
    txt: "",
};

export const del = (key) => (dispatch, getState) => {

    const userUid = getState().auth.user.uid;
    database.ref(`/Users/${userUid}/Tasks/${key}`).remove()
};

export const sendTaskToDb = () => (dispatch, getState) => {
    const state = getState();
    const userUid = state.auth.user.uid;


    state.todo.txt === "" ?
        alert('Name of task should contain at least one letter.')
        :
        database.ref('/Users/' + userUid + '/Tasks').push(
            {description: state.todo.txt, completed: 'false'}
        );
    dispatch(clearTxt());

};

export const getTasksFromDb = () => (dispatch, getState) => {



    const userUid = getState().auth.user.uid;
    database.ref('/Users/' + userUid + '/Tasks').on(
        'value',
        (snapshot) => dispatch(addNewTask(mapObjectToArray(snapshot.val())))
    )
};
export default (state = initialState, action) => {

    switch (action.type) {
        case ADDNEWTASK:
            return {
                ...state,
                tasks: action.tasks
            };
        case ADDTXT:
            return {
                ...state,
                txt: action.txt
            };
        case CLEARTXT:
            return {
                ...state,
                txt:""
            };
        default:
            return state
    }
}