import { $host } from "../../http";
import { AppDispatch } from "../store";
import { aboutMeSlice } from "./AboutMeSlice";

export const fetchGetAboutMe = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $host.get('/aboutMe')
        dispatch(aboutMeSlice.actions.getAboutMe({ aboutMe: response.data }))
    } catch (error: any) {
        console.log(error)
    }
}