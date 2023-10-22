import { IAboutMe } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AboutMeState {
    aboutMe: IAboutMe[];
}

const initialState: AboutMeState = {
    aboutMe: []
}

export const aboutMeSlice = createSlice({
    name: 'aboutMe',
    initialState,
    reducers: {
        getAboutMe(state, action: PayloadAction<AboutMeState>) {
            state.aboutMe = action.payload.aboutMe
        }
    }
})

export default aboutMeSlice.reducer