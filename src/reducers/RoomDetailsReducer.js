export default (state=[], action) => {
    switch(action.type) {
        case 'ADD_ROOM_DETAILS':
            return [
                ...state,
                action.roomDetails
            ];
        case 'EDIT_ROOM_DETAILS':
            return state.map((element) => {
                if (element.id === action.id) {
                    let updateObject = {id: action.id, name: action.name};
                    return {
                        ...element,
                        ...updateObject
                    }
                } else {
                    return element;
                }
            });
        default:
            return state;
    }
};