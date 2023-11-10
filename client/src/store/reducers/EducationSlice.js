import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    education: []
}

export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        getEducation(state, action) {
            state.education = action.payload.education
        }
    }
})

export default educationSlice.reducer