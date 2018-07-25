export default (state=[], action) => {
    switch(action.type) {
        case 'ADD_ROOMTYPE':
            return [
                ...state,
                action.roomType
            ];
        case 'EDIT_ROOMTYPE':
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