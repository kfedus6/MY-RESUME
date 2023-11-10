import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    aboutMe: []
}

export const aboutMeSlice = createSlice({
    name: 'aboutMe',
    initialState,
    reducers: {
        getAboutMe(state, action) {
            state.aboutMe = action.payload.aboutMe
        }
    }
})

export default aboutMeSlice.reducer