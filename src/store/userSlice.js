import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user:{}
    },
    reducers: {
        userProfile: (state, action) => {
             state.user=action.payload
        },
    },
});



export const { userProfile } = userSlice.actions;

export default userSlice.reducer;