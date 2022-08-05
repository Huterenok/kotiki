import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/localStorage";


const favoriteSlice = createSlice({
	name:'favorites',
	initialState:getLocalStorage('store'),
	reducers :{
		addToFavorite : (state,action) => {
			state.push({
				id : action.payload.id,
				url : action.payload.url
			})

		},
		removeFromFavorite : (state,action) =>{
			return state.filter((favorite) => favorite.id !== action.payload.id)
		}
	}
})
export default favoriteSlice.reducer
export const {addToFavorite,removeFromFavorite} = favoriteSlice.actions
