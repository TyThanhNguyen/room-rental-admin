export default (state=[], action) => {
    switch(action.type) {
        case 'ADD_PROPERTY_RULE':
            return [
                ...state,
                action.propertyRule
            ];
        case 'EDIT_PROPERTY_RULE':
            return state.map((propertyRule) => {
                if (propertyRule.id === action.id) {
                    let itemObject = {id: action.id, name: action.name}
                    return {
                        ...propertyRule,
                        ...itemObject
                    }
                } else {
                    return propertyRule;
                }
            });
        default:
            return state;
    }
}