import {addNewTask} from "./todo";
import {mapObjectToArray} from "../functions";
import {database} from "../firebase";

const ADDQUOTE = 'quote/ADDQUOTE'

const addQuote = (quote) => ({type: ADDQUOTE,quote})

const initialState = {
    quote: []
};

export const fetchQuote = () => (dispatch, getState) => (

    fetch('http://quotes.rest/qod')
        .then(response => response.json())
        .then(data => database.ref('/Quote').set(
            {quote: data.contents.quotes[0].quote}
            )
        ).catch(() => alert("Failed to get quote")));

export const getQuoteFromDb = () => (dispatch, getState) => {
    database.ref('/Quote').on(
        'value',
        (snapshot) => dispatch(addQuote(mapObjectToArray(snapshot.val())))
    )
};
export default (state=initialState,action)=>{
    switch (action.type){
        case ADDQUOTE:
            return {
                ...state,
                quote:action.quote
            }
        default:
            return state
    }
}