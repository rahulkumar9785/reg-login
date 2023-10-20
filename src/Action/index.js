export const addUser = (data) => {
    return {
        type: 'addtolist',
        payload: {
            data: data,
        },
    };
};
