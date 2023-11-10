import { combineReducers, configureStore } from "@reduxjs/toolkit"
import aboutMeSlice from "./reducers/AboutMeSlice"
import linksSlice from "./reducers/LinksSlice"
import skillsSlice from "./reducers/SkillsSlice"
import portfolioSlice from "./reducers/PortfolioSlice"
import educationSlice from "./reducers/EducationSlice"
import experienceSlice from "./reducers/ExperienceSlice"

const rootReducer = combineReducers({
    aboutMeSlice,
    linksSlice,
    skillsSlice,
    portfolioSlice,
    educationSlice,
    experienceSlice,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}