export const INIT = "Inicializar";

export const reducer = (state, action) =>{ 
    switch(action.type){
        case INIT:
            return action.payload;
    }
}