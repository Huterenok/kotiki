import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";
import { setLocalStorage } from "../utils/localStorage";
const store = configureStore({
	reducer : {
		favorites : favoriteSlice
	}
})
export default store