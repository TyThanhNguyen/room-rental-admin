export const addSecurityAndSafety = ({
    id = '',
    name = ''
}) => ({
    type: 'ADD_SECURITYANDSAFETY',
    securityAndSafety: {
        id,
        name
    }
});

export const editSecurityAndSafety = ({ id, name }) => ({
    type: 'EDIT_SECURITYANDSAFETY',
    id,
    name
})