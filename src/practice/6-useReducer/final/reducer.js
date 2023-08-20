export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];

    return {
      ...state,
      people: newItems,
      modalOpen: true,
      modalContent: "Item_Added"
    };
  }
  if (action.type === "NO_ITEM") {
    return { ...state, modalOpen: true, modalContent: "Empty Field" };
  }
  if (action.type === "REMOVE_MODAL") {
    return { ...state, modalOpen: false, modalContent: "" };
  }
  if (action.type === "REMOVE_ITEM") {
    const removedItem = state.people.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...state,
      people: removedItem,
      modalOpen: true,
      modalContent: "Item_Removed"
    };
  }
};
