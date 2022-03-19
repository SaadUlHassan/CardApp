import { CardActionTypes } from "../CardActions/CardActions";

const defaultState = {
  cards: [],
  // userFilter: "All",
  // updateData: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CardActionTypes.addCard:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    // case UserActionTypes.updateTodoList:
    //   return {
    //     ...state,
    //     users: [...state.users].map((obj) =>
    //       action.payload.id === obj.id ? action.payload : obj
    //     ),
    //     updateData: null,
    //   };
    // case UserActionTypes.filterTodo: {
    //   return {
    //     ...state,
    //     userFilter: action.payload,
    //   };
    // }
    // case UserActionTypes.updateCheckStatus: {
    //   return {
    //     ...state,
    //     users: state.users?.map((user) => {
    //       if (user.id !== action.payload.id) {
    //         return user;
    //       }
    //       return {
    //         ...user,
    //         checked:
    //           action.payload.status !== "Deleted"
    //             ? !user.checked
    //             : user.checked,
    //         status: action.payload.status,
    //       };
    //     }),
    //   };
    // }
    // case UserActionTypes.setUpdateData:
    //   return {
    //     ...state,
    //     updateData: action.payload,
    //   };

    default:
      return state;
  }
};

export default userReducer;
