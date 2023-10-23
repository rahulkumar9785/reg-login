export const addUser = (data) => {
    return {
        type: 'addtolist',
        payload: {
            data: data,
        },
    };
};

export const updateUser = (data) =>{
    return{
        type:'updateUser',
        payload: {
            data: data,
        },
    };
};