import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    experience: []
}

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        getExperience(state, action) {
            state.experience = action.payload.experience
        }
    }
})

export default experienceSlice.reducer