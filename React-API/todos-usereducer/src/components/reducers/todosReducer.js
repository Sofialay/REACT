export const TODO_DELETE = 'TODOS_DELETE';
export const TODO_ADD = 'TODO_ADD';
export const TODO_EDIT = 'TODO_EDIT';


export default (state, action) => {
    switch(action.type) {
        case TODO_ADD:
            return [...state, action.payload]
        case TODO_EDIT:
            state.map(todo => {
                if(todo.id == action.payload.editedId) todo.task = action.payload.newTask;
            })
             return state;
        case TODO_DELETE:
            //falta el filter del todo
            return 
        default:
            return state;
    }
}
