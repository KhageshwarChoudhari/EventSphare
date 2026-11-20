import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./slices/favoritesSlice"

export const store = configureStore({
    reducer : { favourites : favoritesSlice },
}) ;