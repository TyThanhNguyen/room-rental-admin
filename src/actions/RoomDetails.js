export const addRoomDetails = ({id = '', name = ''}) => ({
    type: 'ADD_ROOM_DETAILS',
    roomDetails: {
        id,
        name
    }
});

export const editRoomDetails = ({id, name}) => ({
    type: 'EDIT_ROOM_DETAILS',
    id,
    name
});