import { $host } from "../../http";
import { AppDispatch } from "../store";
import { aboutMeSlice } from "./AboutMeSlice";
import { linksSlice } from "./LinksSlice";

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