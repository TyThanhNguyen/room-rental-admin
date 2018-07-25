export const addFacility = ({
        id = '',
        item = ''
    }) => ({
        type: 'ADD_FACILITY',
        facility: {
            id,
            item
        }
});

export const editFacility = ({id, item}) => ({
    type: 'EDIT_FACILITY',
    id,
    item
});