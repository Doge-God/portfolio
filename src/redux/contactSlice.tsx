import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    name:string,
    email:string,
    message:string,
    isLoading:boolean
}

const initialState: InitialState = {
    name:"",
    email:"",
    message:"",
    isLoading:false
}

const contactSlice = createSlice({
    name : 'contact',
    initialState,
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        updateEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        updateMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        },
        updateLoading: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        clearFields: (state) => {
            state.name = ''
            state.email = ''
            state.message = ''
        }
    }

})

export default contactSlice.reducer
export const { updateName, updateEmail, updateMessage, updateLoading, clearFields} = contactSlice.actions