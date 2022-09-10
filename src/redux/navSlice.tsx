import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    isMenuOn: boolean
}

const initialState: InitialState = {
    isMenuOn: false
}

const navSlice = createSlice({
    name : 'nav',
    initialState,
    reducers: {
        toggleMenu: state => {
            state.isMenuOn = !state.isMenuOn
        },
        menuOff: state => {
            state.isMenuOn = false
        }
    }

})

export default navSlice.reducer
export const { toggleMenu } = navSlice.actions