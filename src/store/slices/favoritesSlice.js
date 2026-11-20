import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: JSON.parse(localStorage.getItem("eventsphare-favorite")) || [],
  },

  reducers: {
    toggleFavorites(state, action) {
      const event = action.payload;
      const exitingEvent = state.items.find(
        (e) => (e.id || e._id) === (event.id || event._id),
      );
      if (exitingEvent) {
        // remove
        state.items = state.items.filter(
          (e) => (e.id || e._id) !== (event.id || event._id),
        );
      } else {
        // add
        state.items.push(event);
      }
      localStorage.setItem("eventsphare-favorite", JSON.stringify(state.items));
    },
    clearAllFavorites(state) {
      state.items = [];
      localStorage.clear("eventsphare-favorite");
    },
  },
});

export const { toggleFavorites, clearAllFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
