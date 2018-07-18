import uuid from 'uuid';

export const addFacility = ({
        item = ''
    }) => ({
        type: 'ADD_FACILITY',
        facility: {
            id: uuid(),
            item
        }
});

export const editFacility = ({id, updates}) => ({
    type: 'EDIT_FACILITY',
    id,
    updates
});