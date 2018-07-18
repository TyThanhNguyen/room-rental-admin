export const addBillInclude = ({
        id = '',
        item = ''
    }) => ({
        type: 'ADD_BILL_INCLUDED',
        billInclude: {
            id,
            item
        }
});

export const editBillInclude = ({ id, item }) => ({
    type: 'EDIT_BILL_INCLUDED',
    id,
    item
})