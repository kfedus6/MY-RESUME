import { $host } from "../../http";
import { AppDispatch } from "../store";
import { aboutMeSlice } from "./AboutMeSlice";
import { educationSlice } from "./EducationSlice";
import { experienceSlice } from "./ExperienceSlice";
import { linksSlice } from "./LinksSlice";
import { portfolioSlice } from "./PortfolioSlice";
import { skillsSlice } from "./SkillsSlice";

export const fetchGetAboutMe = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get('/aboutMe')
        dispatch(aboutMeSlice.actions.getAboutMe({ aboutMe: response.data }))
    } catch (error: any) {
        console.log(error)
    }
}

export const fetchGetLinks = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get('/links')
        dispatch(linksSlice.actions.getLinks({ links: response.data }))
    } catch (error: any) {
        console.log(error)
    }
}

export const fetchGetSkills = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get('/skills')
        dispatch(skillsSlice.actions.getSkills({ skills: response.data }))
    } catch (error: any) {
        console.log(error)
    }
}

export const fetchGetPortfolio = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get('/portfolio')
        dispatch(portfolioSlice.actions.getPortfilio({ portfolio: response.data }))
    } catch (error: any) {
        console.log(error)
    }
}

export const fetchGetExperience = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get('/experience')
        dispatch(experienceSlice.actions.getExperience({ experience: response.data }))
    } catch (error: any) {
        console.log(error)
    }
}

export const fetchGetEducation = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get('/education')
        dispatch(educationSlice.actions.getEducation({ education: response.data }))
    } catch (error: any) {
        console.log(error)
    }
}

export const fetchSendEmail = (obj: any) => async (dispatch: AppDispatch) => {
    try {
        await $host.post('/sendEmail', obj)
    } catch (error: any) {
        console.log(error)
    }
}