import { ISkills } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface SkillsState {
    skills: ISkills[]
}

const initialState: SkillsState = {
    skills: []
}

export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        getSkills(state, action: PayloadAction<SkillsState>) {
            state.skills = action.payload.skills
        }
    }
})

export default skillsSlice.reducer