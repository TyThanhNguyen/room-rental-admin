
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_BILL_INCLUDED':
            // array spread operator
            return [
                ...state,
                action.billInclude
            ];
        case 'EDIT_BILL_INCLUDED':
            return state.map((billInclude) => {
                if (billInclude.id === action.id) {
                    let itemObject = {id: action.id, item: action.item}
                // object spread operator 
                    return {
                        ...billInclude,
                        ...itemObject
                    }
                } else {
                    return billInclude;
                }
            });
        default:
            return state;
    }
};