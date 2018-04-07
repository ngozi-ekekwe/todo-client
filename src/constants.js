const BASE_URL ="https://todouserapi.herokuapp.com";


const userConstants = {

    CREATE_USER: BASE_URL + "/api/user",

    LOG_IN: BASE_URL + "/api/login",

    CREATE_TODO: BASE_URL + "/api/todo",

    LIST_TODO: BASE_URL + "/api/todos",

    UPDATE_TODO: BASE_URL + "/api/:todoId/todo/userId",

    DELETE_TODO: BASE_URL + "/api/:todoId/todo/userId",

    GET_USER_TODOS: BASE_URL + "/api/user/todos/:userId"
}

export default userConstants;