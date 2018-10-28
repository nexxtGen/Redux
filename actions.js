import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT' //Tworzenie komentarza
const REMOVE_COMMENT = 'REMOVE_COMMENT'; //usuwanie komentarza
const EDIT_COMMENT = 'EDIT_COMMENT'; // edycja komentarza
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'; //like
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'; //unlike

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function thumbUpComment(id) {
    return{
        type: THUMB_UP_COMMENT,
        id
    }
}

function thumbDownComment(id) {
    return{
        type: THUMB_DOWN_COMMENT,
        id
    }
}