
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
                    return {
                        ...facility,
                        ...action.updates
                    }
                } else {
                    return facility;
                }
            });
        default:
            return state;
    }
};