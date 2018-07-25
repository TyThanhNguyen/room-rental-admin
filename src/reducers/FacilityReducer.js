
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_FACILITY':
            return [
                ...state,
                action.facility
            ];
        case 'EDIT_FACILITY':
            return state.map((facility) => {
                if (facility.id === action.id) {
                    let itemObject = {id: action.id, item: action.item}
                    return {
                        ...facility,
                        ...itemObject
                    }
                } else {
                    return facility;
                }
            });
        default:
            return state;
    }
};