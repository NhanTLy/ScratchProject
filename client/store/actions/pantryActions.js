import axios from 'axios';


// Get Shopping Items
export const getPantryItems = () => (dispatch) => {
  axios.get("/api/pantry").then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

// Load Shopping Item
export const LOAD_PANTRY_ITEM = "LOAD_PANTRY_ITEM";
export const loadPantryItem = (items) => ({
  type: LOAD_PANTRY_ITEM,
  payload: items,
});

// Add Shopping Items
export const ADD_PANTRY_ITEM = "ADD_PANTRY_ITEM";
export const addPantryItem = (item) => (dispatch) => {
  axios.post("/api/pantry/submit", item).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

export const DELETE_PANTRY_ITEM = "DELETE_PANTRY_ITEM";
export const deletePantryItem = (id) => (dispatch) => {
  console.log('inside action', id);
  axios.delete(`/api/pantry/delete/${id}`).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

export const ADD_QTY = 'ADD_QTY';
export const addQty = (id) => (dispatch) => {
  axios.put(`/api/pantry/itemup/${id}`).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

export const MINUS_QTY = 'MINUS_QTY';
export const minusQty = (id) => (dispatch) => {
  axios.put(`/api/pantry/itemdown/${id}`).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};