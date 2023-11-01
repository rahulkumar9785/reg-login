import axios from 'axios'
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

export const fetch = () => {
    return async (dispatch) => {
        const request = axios.get("https://localhost:7258/api/Form");
        dispatch({
            type:"FETCH",
            payload: request.data
        })
    }
}