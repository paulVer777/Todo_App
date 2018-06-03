const ADDNEWTASK = 'todo/ADDNEWTASK';
const ADDLETTER = 'todo/ADDLETTER';


const addNewTask = (task) => ({type: ADDNEWTASK, task});
const addLetter = (letter) => ({type: ADDLETTER, letter});


const initialState = {
    tasks: [],
    txt: ''
};


export default (state = initialState, action) => {

    switch (action.type) {
        case ADDNEWTASK:
            return {
                ...state,
                tasks: action.task
            };
        case ADDLETTER:
            return {
                ...state,
                txt: action.letter
            };
        default:
            return state
    }
}