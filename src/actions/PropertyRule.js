export const addPropertyRule = ({
    id = '',
    name = ''
}) => ({
    type: 'ADD_PROPERTY_RULE',
    propertyRule: {
        id,
        name
    }
});

export const editPropertyRule = ({
    id,
    name
}) => ({
    type: 'EDIT_PROPERTY_RULE',
    id,
    name
});