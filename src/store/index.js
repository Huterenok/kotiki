import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";
import { setLocalStorage } from "../utils/localStorage";
const store = configureStore({
	reducer : {
		favorites : favoriteSlice
	}
})
store.subscribe(()=>{
	setLocalStorage('store',store.getState().favorites)
})
export default store