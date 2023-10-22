import { IPortfolio } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PortfolioState {
    portfolio: IPortfolio[]
}

const initialState: PortfolioState = {
    portfolio: []
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        getPortfilio(state, action: PayloadAction<PortfolioState>) {
            state.portfolio = action.payload.portfolio
        }
    }
})

export default portfolioSlice.reducer