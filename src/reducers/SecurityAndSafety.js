export default (state=[], action) => {
    switch(action.type) {
        case 'ADD_SECURITYANDSAFETY':
            return [
                ...state,
                action.securityAndSafety
            ];
        case 'EDIT_SECURITYANDSAFETY':
            return state.map((element) => {
                if (element.id === action.id) {
                    let itemObject = {id: action.id, name: action.name}
                    return {
                        ...element,
                        ...itemObject
                    }
                } else {
                    return element;
                }
            });
        default:
            return state;
    }
}