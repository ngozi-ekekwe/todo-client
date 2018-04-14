const BASE_URL ="https://todouserapi.herokuapp.com";


export const userConstants = {

    CREATE_USER: BASE_URL + "/api/user",

    LOG_IN: BASE_URL + "/api/login",

    CREATE_TODO: BASE_URL + "/api/todo",

    LIST_TODO: BASE_URL + "/api/todos",

    UPDATE_TODO: BASE_URL + "/api/:todoId/todo/userId",

    DELETE_TODO: BASE_URL + "/api/:todoId/todo/userId",

    GET_USER_TODOS: BASE_URL + "/api/user/todos/:userId"
}

export default userConstants;

// export const buildURL = (type) => {
//     return `https://todouserapi.herokuapp.com${type}`
// }

// // buildURL(userConstants.LOG_IN)

// import {userConstants, buildURL} from './'

// buildURL(userConstants.LOG_IN)