import { $host } from "../../http";
import { AppDispatch } from "../store";
import { aboutMeSlice } from "./AboutMeSlice";
import { linksSlice } from "./LinksSlice";
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