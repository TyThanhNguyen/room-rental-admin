export const addRoomType = ({
    id,
    name,
    description
}) => ({
    type: 'ADD_ROOMTYPE',
    roomType: {
        id,
        name,
        description
    }
});

export const editRoomType = ({id, name, description}) => ({
    type: 'EDIT_ROOMTYPE',
    id,
    name,
    description
});