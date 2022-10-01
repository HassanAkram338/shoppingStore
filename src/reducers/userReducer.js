import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  colors : {}
};

const userReducer = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateAuthentication(state, action) {
      state.isAuthenticated = action.payload;
    },
    addColor(state,action){
      state.colors = action.payload
    }
  },
});

export const { updateAuthentication,addColor } = userReducer.actions;
export default userReducer.reducer