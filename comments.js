import {
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT,
} from './actions';

//
function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                        id: action.id,
                        text: action.text,
                        votesUp: 0,
                        votesDown: 0
                    }, 
                    ...state
                ]; 
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id)            

        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, text: action.text}// => { id:xxx, text: action.text, votesUp: 0, votesDown: 0 }
                } else {
                    return comment;                        
                }
            });    

        case THUMB_UP_COMMENT:
            return state.map(comment => {
                    if (state.id === action.id) {
                        return {...comment, votesUp: comment.votesUp + 1 }
                    } else {
                        return comment;
                    }
                });           

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                    if (state.id === action.id) {
                        return {...comment, votesDown: comment.votesDown + 1 }
                    } else {
                        return comment;
                    }
                });            
        default:
            return state;
    }
}

export default comments;