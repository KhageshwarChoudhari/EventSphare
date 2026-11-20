import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },

  reducers: {
    toggleFavourites(state, action) {
      const event = action.payload;
      const exitingEvent = state.items.find(
        (e) => (e.id || e._id) === (event.id || event._id),
      );
      if (exitingEvent) {
        // remove
        state.items = state.items.filter((e) => (e.id || e._id) !== (event.id || event._id))
      }else{
        // add
        state.items.push(event)
      }
    },
  },
});

export const { toggleFavourites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
