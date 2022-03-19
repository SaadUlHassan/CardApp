export const CardActionTypes = {
  addCard: "CARD/ADD",
};
const CardActions = {
  addCard: (data) => {
    return {
      type: CardActionTypes.addCard,
      payload: data,
    };
  },
};

export default CardActions;
