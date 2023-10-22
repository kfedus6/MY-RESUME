import { IEducation } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface EducationState {
    education: IEducation[]
}

const initialState: EducationState = {
    education: []
}

export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        getEducation(state, action: PayloadAction<EducationState>) {
            state.education = action.payload.education
        }
    }
})

export default educationSlice.reducer