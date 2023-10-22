import { ILinks } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface LinksState {
    links: ILinks[]
}

const initialState: LinksState = {
    links: []
}

export const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        getLinks(state, action: PayloadAction<LinksState>) {
            state.links = action.payload.links
        }
    }
})

export default linksSlice.reducer