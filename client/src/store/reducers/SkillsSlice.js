import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    skills: []
}

export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        getSkills(state, action) {
            state.skills = action.payload.skills
        }
    }
})

export default skillsSlice.reducer