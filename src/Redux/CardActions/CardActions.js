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
  // updateTodoList: (data) => {
  //   return {
  //     type: TodoActionTypes.updateTodoList,
  //     payload: data,
  //   };
  // },
  // filterTodoList: (filter) => {
  //   return {
  //     type: TodoActionTypes.filterTodo,
  //     payload: filter,
  //   };
  // },
  // updateCheckStatus: (data) => {
  //   return {
  //     type: TodoActionTypes.updateCheckStatus,
  //     payload: data,
  //   };
  // },
  // setUpdateData: (data) => {
  //   return {
  //     type: TodoActionTypes.setUpdateData,
  //     payload: data,
  //   };
  // },
};

export default CardActions;
