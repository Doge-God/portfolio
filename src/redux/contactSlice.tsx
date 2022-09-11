import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    name:string,
    email:string,
    message:string
}

const initialState: InitialState = {
    name:"",
    email:"",
    message:""
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
        }
    }

})

export default contactSlice.reducer
export const { updateName, updateEmail, updateMessage } = contactSlice.actions