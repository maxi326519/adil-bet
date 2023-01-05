import '../actions/types';

const initialState = {
    // Agregrar las variables necesarias
    userDates: {},
    userlogin: false,
}

export const Reducer = (state = initialState, action)=>{
    switch(action.type){
        // Agregar cada caso
        case 'POST_CREATE_USER': {
            //window.localStorage.setItem(USER, JSON.stringify([action.payload]));
            return {
              ...state,
              userDates: action.payload,
              userlogin: true,
            };
          }
          case 'LOGIN_USER': {
            console.log(action.payload);
            // window.localStorage.setItem(USER, JSON.stringify([action.payload]));
            return {
              ...state,
              userDates: action.payload,
              userlogin: true,
            };
          }
          case 'CREATE_USER_AUTH0': {
            console.log(action.payload);
            // window.localStorage.setItem(USER, JSON.stringify([action.payload]));
            // window.localStorage.setItem(AUTH0, 'YES');
            return {
              ...state,
              userlogin: true,
              userDates: action.payload,
            };
          }
    }
}