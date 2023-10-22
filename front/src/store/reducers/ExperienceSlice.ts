import { IExperience } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ExperienceState {
    experience: IExperience[]
}

const initialState: ExperienceState = {
    experience: []
}

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        getExperience(state, action: PayloadAction<ExperienceState>) {
            state.experience = action.payload.experience
        }
    }
})

export default experienceSlice.reducer