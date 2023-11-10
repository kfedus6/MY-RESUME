import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    portfolio: []
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        getPortfilio(state, action) {
            state.portfolio = action.payload.portfolio
        }
    }
})

export default portfolioSlice.reducer