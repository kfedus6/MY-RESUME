import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    links: []
}

export const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        getLinks(state, action) {
            state.links = action.payload.links
        }
    }
})

export default linksSlice.reducer