import { CardActionTypes } from "../CardActions/CardActions";

const defaultState = {
  cards: [],
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CardActionTypes.addCard:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
